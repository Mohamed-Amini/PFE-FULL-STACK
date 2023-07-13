<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

class TermsController extends AbstractController
{

    #[Route('/user/Terms' , name: 'app_user_terms')]
    public function terms(){
        return $this->render('appointment/Terms.html.twig', []);
    }
    
    #[Route('/doctor/Terms' , name: 'app_doctor_terms')]
    public function DoctorTerms(){
        return $this->render('appointment/DocTerms.html.twig', []);
    }


}
