<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
    use Vich\UploaderBundle\Form\Type\VichImageType;


class UserProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('UserPictureFile', VichImageType::class, [
                'required' => true,
                'mapped' => true,
            ])
                ->add('firstName', TextType::class, [
                'label' => 'First Name',
                'constraints' => [
                    new NotBlank(),
                    new Regex([
                        'pattern' => '/^[a-zA-Z ]+$/',
                        'message' => 'First name should contain only letters and spaces'
                    ])
                ]
                    ])
            ->add('PhoneNumber' ,null ,[
                'label' => 'Phone Number'
            ])

            ->add('lastName', TextType::class, [
                'label' => 'Last Name',
                'constraints' => [
                    new NotBlank(),
                    new Regex([
                        'pattern' => '/^[a-zA-Z ]+$/',
                        'message' => 'Last name should contain only letters and spaces'
                    ])
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'constraints' => [
                    new NotBlank(),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',
                        'message' => 'Please enter a valid email address'
                    ])
                ]
            ])
            ->add('plainPassword', PasswordType::class, [
                'label' => 'New Password',
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new Regex([
                        'pattern' =>'/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/',
                        'message' => 'Password should be at least 8 characters long and contain at least one letter and one number'
                    ])
                ]
                    ]);
            // ->add('DateofBirth', DateType::class, [
            //     'label' => 'disabled',
            //     'widget' => 'single_text', 
            //     'format' => 'yyyy-MM-dd'    
            // ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}