<?php

namespace App\Controller;

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

        return $this->render('docter_profile/index.html.twig', [
            'doctor' => $doctor,
            'form' => $form->createView()
        ]);
    }
}
