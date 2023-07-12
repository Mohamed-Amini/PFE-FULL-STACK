<?php

namespace App\Controller;

use app\Entity\Appointment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\DoctorProfileType;

class DocterProfileController extends AbstractController
{
    private $entityManager;
    
    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/doctor/profile', name: 'app_doctor_profile')]
    public function profile(Request $request): Response
    {
        $doctor = $this->getUser();
        $form = $this->createForm(DoctorProfileType::class, $doctor);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->entityManager;
            $em->persist($doctor);
            $em->flush();
            $this->addFlash('success', 'Profile updated!');
        } else {
            $this->addFlash('error', 'There were validation errors.');
        }
        dump($doctor);
        $ss =  $doctor->getemail();
        $ww = $doctor->getPassword();
        $qq = $doctor->getDocFirstName();
        $ee = $doctor->getDocLastName();
        $aa = $doctor->getDocPhoneNumber();
        $tt = $doctor->getSpecialization();
        return $this->render('docter_profile/index.html.twig', [
            'doctor' => ['email' => $ss , 'password' => $ww ,  'firstname' => $qq , 'lastname' => $ee , 'phonenumber' => $aa , 'specialization' => $tt ],
            'form' => $form->createView()
        ]);
    }

    #[Route('/doctor/dashboard' , name: 'app_doctor_dashboard')]
    public function dashboard() : Response {
        $doctor = $this->getUser();

        $appointments = $this->entityManager->getRepository(Appointment::class)->findBy(['doctor' => $doctor]);

        $dateString = $appointments[0]->getAppointmentDate()->format('Y-m-d H:i:s'); 

        dump($dateString);



        $username = $doctor->getDocFirstName();
        return $this->render('docter_profile/dashboard.html.twig',[
            'username' => $username,
            'appointments' => $dateString
        ]);
    }
}
