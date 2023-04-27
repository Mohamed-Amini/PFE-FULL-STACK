<?php

declare(strict_types=1);

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

final class DoctorsAdmin extends AbstractAdmin
{

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('email')
            ->add('password')
            ->add('DocFirstName')
            ->add('DocLastName')
            ->add('Specialization')
            ->add('DocPhoneNumber')
            ->add('Bio')
            ->add('DocPicture')
            ->add('DocAddress');
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add('email')
            ->add('password')
            ->add('DocFirstName')
            ->add('DocLastName')
            ->add('Specialization')
            ->add('DocPhoneNumber')
            ->add('Bio')
            ->add('DocPicture')
            ->add('DocAddress')
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
        ->add('Bio', null, [
            'constraints' => [
                new NotBlank(['message' => 'Bio is required']),
            ],
        ])
        ->add('DocPicture', null, [
            'required' => false,
            'constraints' => [
                new Image([
                    'maxSize' => '1024k',
                    'mimeTypes' => ['image/jpeg', 'image/png'],
                    'mimeTypesMessage' => 'Invalid image format (JPEG or PNG only)',
                ]),
            ],
        ])
        ->add('DocAddress', null, [
            'constraints' => [
                new NotBlank(['message' => 'Address is required']),
            ],
        ]);
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('email')
            ->add('password')
            ->add('DocFirstName')
            ->add('DocLastName')
            ->add('Specialization')
            ->add('DocPhoneNumber')
            ->add('Bio')
            ->add('DocPicture')
            ->add('DocAddress');
    }


}