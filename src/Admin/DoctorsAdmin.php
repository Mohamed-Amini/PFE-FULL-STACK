<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Doctors;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\FieldDescription\FieldDescriptionInterface;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

final class DoctorsAdmin extends AbstractAdmin
{
    
    public function __construct(string $code, string $class, string $baseControllerName)
    {
        parent::__construct($code, $class, $baseControllerName);   
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('email')
            ->add('DocFirstName')
            ->add('DocLastName')
            ->add('Specialization')
            ->add('DocPhoneNumber');
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->addIdentifier('DocLastName', null ,[
                'label' => 'Last Name',
            ])
            ->add('DocFirstName' , null ,[
                'label' => 'First Name',
            ])
            ->add('Specialization' , null ,[
                'label' => 'Specialization'
            ])
            ->add('DocPhoneNumber' , null ,[
                'label' => 'Phone Number']
            )
            ->add('Bio' , null ,[
                'label' => 'Biography']
            )
            ->add('email' , FieldDescriptionInterface::TYPE_EMAIL , [
                'label' => 'Email'
            ])
            // ->add('passwordHash', null, [
            //     'label' => 'Password',
            // ])
            ->add('roles' , null, [
                'label' => 'Roles',
            ])
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
    $formBuilder = $form->getFormBuilder();
    $formBuilder
        ->add('DocFirstName', null, [
            'constraints' => [
                new NotBlank(['message' => 'First name is required']),
            ],
        ])
        ->add('DocLastName', null, [
            'constraints' => [
                new NotBlank(['message' => 'Last name is required']),
            ],
        ])
        ->add('email', null, [
            'constraints' => [
                new NotBlank(['message' => 'Email is required']),
                new Email(['message' => 'Invalid email address']),
            ],
        ])
        ->add('plainPassword', PasswordType::class, [
            'label' => 'Password',
            'mapped' => false,
            'constraints' => [
                new NotBlank([
                    'message' => 'Please enter a password',
                ]),
                new Length([
                    'min' => 6,
                    'max' => 50,
                ]),
            ],
        ])
        ->add('Specialization', null, [
            'constraints' => [
                new NotBlank(['message' => 'Specialization is required']),
            ],
        ])
        ->add('DocPhoneNumber', null, [
            'constraints' => [
                new NotBlank(['message' => 'Phone number is required']),
                new Regex([
                    'pattern' => '/^[0-9]{10}$/',
                    'message' => 'Invalid phone number',
                ]),
            ],
        ])
        ->add('Bio', TextareaType::class, [
            'required' => true,
            'label' => 'Biography',
            'attr' => ['rows' => 5]
        ])
        ->add('DocAddress', null, [
            'constraints' => [
                new NotBlank(['message' => 'Address is required']),
            ],
        ])
        ->add('DocPictureFile', VichImageType::class, [
            'required' => false,
            'mapped' => true,
            'delete_label' => 'Delete the Picture ?',
            'download_label' => 'Download the picture',
            'constraints' => [
                new Image([
                    'maxSize' => '1024k',
                    'mimeTypes' => ['image/jpeg', 'image/png'],
                    'mimeTypesMessage' => 'Invalid image format (JPEG or PNG only)',
                ]),
            ],
        ])
        ->add('roles', ChoiceType::class, [
            'choices' => [
                'ROLE_DOCTOR' => 'ROLE_DOCTOR',
                'ROLE_USER' => 'ROLE_USER',
                'ROLE_ADMIN' => 'ROLE_ADMIN',
            ],
            'expanded' => true,
            'multiple' => true,
            'required' => true,
            'label' => 'Roles',
        ]);

    $formBuilder->addEventListener(FormEvents::SUBMIT, [$this, 'onSubmit']);
}

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('email', FieldDescriptionInterface::TYPE_EMAIL)
            ->add('roles')
            ->add('Password', null, [
                'label' => 'Password',
            ])
            ->add('DocFirstName')
            ->add('DocLastName')
            ->add('Specialization')
            ->add('DocPhoneNumber')
            ->add('Bio', FieldDescriptionInterface::TYPE_TEXTAREA)
            ->add('DocPicture', null, [
                'template' => 'admin/list_doc_picture.html.twig',
            ])
            ->add('DocAddress');
    }

    public function configureOptions(OptionsResolver $resolver)
    {   
        $resolver->setDefaults([
            'data_class' => Doctors::class,
        ]);
    }

    public function onSubmit(FormEvent $event): void
    {
        $doctor = $event->getData();
        $form = $event->getForm();
        
        if ($form->has('plainPassword')) {
            $plainPassword = $form->get('plainPassword')->getData();
            
            if ($plainPassword) {
                $encodedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);   
                $doctor->setPassword($encodedPassword);
            }
        }
    }
}