<?php

namespace App\Controller;

use App\Entity\Appointment;
use App\Entity\MReport;
use App\Form\MReportType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MedicalReportController extends AbstractController
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('doctor/medical/reports', name: 'medical_report')]
    public function index(): Response
    {
        
        $doctor = $this->getUser(); // Get the logged in user (doctor)
        $appointments = $this->em->getRepository(Appointment::class)->findBy(['doctor' => $doctor]);
        dump($appointments);
        $appointmentData = array_map(function (Appointment $appointment) {
            return [
                'id' => $appointment->getId(),
                'patientName' => $appointment->getUser()->getFullName(),
                'doctorName' => $appointment->getDoctor()->getFullName(),
                'appointmentDate' => $appointment->getAppointmentDate()->format('Y-m-d'),
            ];
        }, $appointments);
    
        return $this->render('medical_report/index.html.twig', [
            'appointments' => $appointmentData,
        ]);
    
    }

    #[Route('doctor/medical/report/{id}', name: 'medical_report_show')]
    public function show(Appointment $appointment, Request $request): Response 
    {
        $patient = $appointment->getUser();

        $report = new MReport();
        $form = $this->createForm(MReportType::class, $report);
        $form->handleRequest($request);
        $age = (new \DateTime())->diff($patient->getDateofBirth())->y;

        if ($form->isSubmitted() && $form->isValid()) {
            $report->setAppointment($appointment);
            $this->em->persist($report);
            $this->em->flush();

            return $this->redirectToRoute('medical_report_show', ['id' => $appointment->getId()]);
        }
        
        return $this->render('medical_report/show.html.twig', [
            'Appointmentid' => $appointment->getId(),
            'date' => $appointment->getAppointmentDate(),
            'birth' => $patient->getDateofBirth(),             
            'age' => $age,
            'name' => $patient->getFullName(),
            'form' => $form->createView()
        ]);
    }
}