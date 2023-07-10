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
        return $this->render('user_profile/index.html.twig', [
            'user' => $user,
            'form' => $form->createView()
        ]);
    }
}