<?php

namespace App\Controller;

use App\Form\UserProfileType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserProfileController extends AbstractController
{
    private $entityManager;
    
    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->entityManager = $entityManager;
    }
    #[Route('/user/profile', name: 'app_user_profile')]
    public function profile(Request $request): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(UserProfileType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->entityManager;
            $em->persist($user);
            $em->flush();
            $this->addFlash('success', 'Profile updated!');
        } else {
            $this->addFlash('error', 'There were validation errors.');
        }
        $ff = $user->getFirstName();
        $wd = $user->getLastName();
        $d1 = $user->getEmail();
        $w8 = $user->getPhoneNumber();
        $qx = $user->getDateofBirth();

        return $this->render('user_profile/index.html.twig', [
            'firstname' => $ff,
            'lastname' => $wd,
            'email' => $d1,
            'phone' => $w8,
            'birthdate' => $qx,
            'form' => $form->createView()
        ]);
    }
}