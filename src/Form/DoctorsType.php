<?php

namespace App\Form;

use App\Entity\Doctors;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Regex;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\Validator\Constraints\Image;




class DoctorProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder

            ->add('email', null , [])
            ->add('docFirstName', TextType::class)
            ->add('docLastName', TextType::class)
            ->add('specialization', TextType::class)
            ->add('docPhoneNumber', TextType::class)
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
            ])
            // ->add('bio', TextareaType::class)
            ->add('DocPictureFile', VichImageType::class, [
                'required' => false,
                'mapped' => true,
                'constraints' => [
                    new Image([
                        'maxSize' => '240k',
                        'mimeTypes' => ['image/jpeg', 'image/png'],
                        'mimeTypesMessage' => 'Invalid image format (JPEG or PNG only)',
                    ]),
                ],
            ])
            // ->add('docAddress', TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Doctors::class,
        ]);
    }
}