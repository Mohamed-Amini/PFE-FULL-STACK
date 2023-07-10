<?php

namespace App\Form;

use App\Entity\Doctors;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\Validator\Constraints\Image;




class DoctorProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('docFirstName', TextType::class)
            ->add('docLastName', TextType::class)
            ->add('specialization', TextType::class)
            ->add('docPhoneNumber', TextType::class)
            ->add('bio', TextareaType::class)
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
            ->add('docAddress', TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Doctors::class,
        ]);
    }
}