<?php

declare(strict_types=1);

namespace App\Admin;

use Doctrine\DBAL\Types\TextType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\FieldDescription\FieldDescriptionInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Constraints\Length;
use Sonata\Form\Type\DatePickerType;
use Symfony\Component\Validator\Constraints\NotBlank;



final class UserAdmin extends AbstractAdmin
{

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('email')
            ->add('roles')
            ->add('FirstName')
            ->add('LastName')
            ->add('DateofBirth')
            ->add('isVerified')
            ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
        
            ->add('id')
            ->addIdentifier('LastName', TextType::class,[
                'class' => 'text-danger font-weight-bold',
                'style' => 'background-color: #ffc107; color: #fff;',
            ])
            ->add('email')
            ->add('roles')
            // ->add('password')
            ->add('FirstName')

            ->add('PhoneNumber')
            ->add('DateofBirth')    
            ->add('isVerified')
            ->add(ListMapper::NAME_ACTIONS, null, [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => [],
                ],
            ]);
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->add('email', null, [
                'constraints' => [
                    new NotBlank(['message' => 'Email is required']),
                    new Email(['message' => 'Invalid email address']),
                ],
            ])
            ->add('password', null, [
                'constraints' => [
                    new NotBlank(['message' => 'Password is required']),
                    new Length(['min' => 6, 'minMessage' => 'Password must be at least 6 characters long']),
                ],
            ]) 
            ->add('FirstName', null, [
                'constraints' => [
                new Length([
                'min' => 2,
                'max' => 60,
                ]),
                ]
                ])
                
            ->add('LastName', null, [
                'constraints' => [
                new Length([
                'min' => 2,
                'max' => 60,
                ]),
                ]
                ])
                
            ->add('PhoneNumber', null, [
                    'constraints' => [
                        new Assert\NotBlank(),
                        new Assert\Regex([
                            'pattern' => '/^[0-9]+$/',
                            'message' => 'The phone number should contain only numeric characters.'
                        ]),
                        new Assert\Length([
                            'min' => 8,
                            'max' => 20,
                            'minMessage' => 'The phone number should have at least {{ limit }} digits.',
                            'maxMessage' => 'The phone number should have at most {{ limit }} digits.'
                        ]),
                    ]
                ])
                
            ->add('DateofBirth', DatePickerType::class)
                
            ->add('roles', ChoiceType::class, [
                    'choices' => [
                        'ROLE_DOCTOR' => 'Doctor',
                        'ROLE_ADMIN' => 'Admin',
                    ],
                    'multiple' => true,
                    'expanded' => true,
                ]);
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('id')
            ->add('email' , FieldDescriptionInterface::TYPE_EMAIL)
            ->add('roles', FieldDescriptionInterface::TYPE_ARRAY)
            ->add('password')
            ->add('FirstName')
            ->add('LastName')
            ->add('PhoneNumber')
            ->add('DateofBirth', FieldDescriptionInterface::TYPE_DATE)
            ->add('isVerified')
            ;
    }
}
