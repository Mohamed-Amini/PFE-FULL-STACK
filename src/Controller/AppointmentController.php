<?php

namespace App\Controller;

use App\Entity\Appointment;
use App\Entity\Doctors;
use App\Form\AppointmentType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AppointmentController extends AbstractController 
{
    private $em;
    public function __construct(EntityManagerInterface $em) 
    {
        $this->em = $em;
    }

    #[Route('user/appointment', name: 'book_appointment')]
    public function bookAppointment(Request $request, EntityManagerInterface $entityManager): Response 
    {
        // Get current user
        $user = $this->getUser();  
        
        // Create new appointment
        $appointment = new Appointment();  
        $appointment->setUser($user); 
        
        // Form to book appointment  
        $form = $this->createForm(AppointmentType::class, $appointment); 
        $form->handleRequest($request);  
        
        
        
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($appointment);
            $entityManager->flush();
            $id = $appointment->getId();    
            
            dump($user, $appointment->getId());

            // Amount in MAD        
            $amount = 600;
            $stripe = new \Stripe\StripeClient('sk_test_51NIgWAGadn6b8XkudMJYK950qyFfujjHWqFehKIZlbBzbv0TWe0UmBSvo76HBx6RAfk7n1C3E8IxOmmgOFyWxuTv00iXaBcB3a');
            $checkout_session = $stripe->checkout->sessions->create([
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'MAD',
                        'unit_amount' => $amount * 100,
                        'product_data' => [
                            'name' => 'Appointment booking',
                        "images" => ['https://img.freepik.com/vecteurs-libre/illustration-physiotherapie-sportive_23-2150076880.jpg?w=826&t=st=1686949762~exp=1686950362~hmac=d1206c8f9597adb74f055011373f6ad5d4cb53fc4363c3d68c36131779de6eec']
                        ],
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => $this->generateUrl('appointment_payment_success', ['id' => $id] , UrlGeneratorInterface::ABSOLUTE_URL), 
            ]);
        
            // Redirect the user to the Stripe payment page
            return $this->redirect($checkout_session->url);
        }  

        $doctors = $this->em->getRepository(Doctors::class)->findAll();

        $doctorsData = array_map(function ($doctor) {
            return [
                'FullName' => $doctor->getFullName(),
                'id' => $doctor->getId(),
                'DocPictureFile' => $doctor->getDocPicture(),
                'Specialization' => $doctor->getSpecialization(),
            ];
        }, $doctors);
        
        return $this->render('appointment/book.html.twig', [
            'form' => $form->createView(),
            'doctors' => $doctorsData,
        ]);   
    }
    
    #[Route('/doctor/appointments', name: 'doctor_appointments')]
    public function appointments(Request $request, EntityManagerInterface $entityManager): Response 
    {
            
        // Get the current user
        $user = $this->getUser();
        
        // If the user is a doctor, get all appointments for that doctor
        if ($user instanceof Doctors) {
            $appointments = $entityManager->getRepository(Appointment::class)->findBy([
                'doctor' => $user,
            ]);
        } else {
            return $this->redirectToRoute('app_home');
        }
        
        $appointmentsData = array_map(function ($appointment) {
            return [
                'id' => $appointment->getId(),
                'appointmentDate' => $appointment->getAppointmentDate()->format('Y-m-d H:i:s'),
                'stripePayment' => $appointment->getStripePayment(),
                'fullName' => $appointment->getUser()->getFullName(),
                'userPicture' => $appointment->getUser()->getUserPicture(),
            ];
        }, $appointments);
    
        return $this->render('appointment/appointments.html.twig', [
            'appointmentsData' => $appointmentsData,
            'jitsi_domain' => $this->getParameter('domain.jitsi.url'),
        ]);
    }
    
    #[Route('user/appointment/payment/success/{id}', name: 'appointment_payment_success')]
    public function paymentSuccess(int $id, EntityManagerInterface $entityManager) 
    {
        $appointment = $entityManager->getRepository(Appointment::class)->find($id);
        $amount = "600 MAD";
        $appointment = $appointment->setStripePayment($amount);
        $entityManager->persist($appointment);
        $entityManager->flush();
        
        return $this->redirectToRoute('app_home');
    }

    #[Route('doctor/start_call/{id}', name: 'doctor_start_call')]
    public function startCall(int $id, EntityManagerInterface $entityManager, \Symfony\Component\Mailer\MailerInterface $mailer) 
    {
        $appointment = $entityManager->getRepository(Appointment::class)->find($id);

        $token = bin2hex(random_bytes(32));
        $appointment->setToken($token);
        $entityManager->persist($appointment);
        $entityManager->flush();
        
        $jitsilink = 'https://' . $this->getParameter('domain.jitsi.url') . '/KenisisTherapieMeeting-' 
          . $appointment->getId()  
          . $token;
        $email = (new Email())
            ->from('appointments@example.com')
            ->to($appointment->getUser()->getEmail())
            ->subject('Appointment Call Link')
            ->html($this->renderView(
                'emails/call_link.html.twig', 
                ['link' => $jitsilink]
            ))
        ;
        
        $mailer->send($email);  
        return $this->redirect($jitsilink);
    }

    #[Route('user/appointment/success_url', name: 'user_appointment_success')]
    public function success(): JsonResponse {
        return new JsonResponse(['sucsess' => true]);
    }
    
    #[Route('user/appointment/payment/cancel', name: 'appointment_payment_cancel')]
    public function paymentCancel() 
    {
        return $this->redirectToRoute('book_appointment');
    }

    #[Route('/user/Terms' , name: 'app_user_terms')]
    public function terms(){
        return $this->render('appointment/Terms.html.twig', []);
    }
    
    #[Route('/doctor/Terms' , name: 'app_doctor_terms')]
    public function DoctorTerms(){
        return $this->render('appointment/DocTerms.html.twig', []);
    }
}