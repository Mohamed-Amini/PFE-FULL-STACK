<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\Appointment;
use App\Entity\Doctor;
use App\Entity\User;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;// Import BaseMapper class here


final class AppointmentAdmin extends AbstractAdmin
{

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add('id')
            ->add('appointmentDate')
            ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
        ->add('id',  null , [
            "label" => "ID"
        ])
        ->add('appointmentDate' , null , [
            "label" => "Appointment Date"
        ])
            ->add('user.LastName' , null , [
                'label' => 'Patient',
            ])
            ->add('doctor.DocLastName' , null , [
                'label' => 'Doctor',
            ])
            ->add('StripePayment' , null , [
                'label' => 'Payement'
            ])
            ->add('Token')
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
            ->add('id',  null , [
                "label" => "ID"
            ])
            ->add('appointmentDate' , null , [
                "label" => "Appointment Date"
            ])
            ->add('user', ModelType::class, [
                'required' => true,
                'class' => User::class,
                'property' => 'username'
            ])
            ->add('doctor', ModelType::class, [
                'required' => true,
                'class' => Doctor::class,
                'property' => 'name'
            ]);
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
        ->add('id',  null , [
            "label" => "Appointment's ID"
        ])
        ->add('appointmentDate' , null , [
            "label" => "Appointment Date"
        ])

            ->add('user.LastName' , null , [
                'label' => 'Patient',
            ])
            ->add('user.id' , null , [
                'label' => "Patient's ID",
            ])
            ->add('user.PhoneNumber' , null , [
                'label' => "Patient Phone number",
            ])
            ->add('user.email' , null , [
                'label' => "Patient Email",
            ])
                        
            ->add('doctor.DocLastName' , null , [
                'label' => 'Doctor',
            ])
            ->add('doctor.id')
            ->add('doctor.DocPhoneNumber')
            ->add('doctor.email');
            
            
    }
}