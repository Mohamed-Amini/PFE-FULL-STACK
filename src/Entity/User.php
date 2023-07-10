<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Serializable;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
#[UniqueEntity(fields: ['PhoneNumber'], message: 'There is already an account with this PhoneNumber')]
#[Vich\Uploadable]
class User implements UserInterface, PasswordAuthenticatedUserInterface, Serializable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 50)]
    private ?string $FirstName = null;

    #[ORM\Column(length: 50)]
    private ?string $LastName = null;

    #[ORM\Column(length: 20)]
    private ?string $PhoneNumber = null;

    #[Vich\UploadableField(mapping: 'doctors', fileNameProperty: 'UserPicture')]
    private ?File $UserPictureFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $UserPicture = 'profile-picture-64a07e25aae3e959536292.png';

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $DateofBirth = null;

    #[ORM\Column(type: 'boolean')]
    private $isVerified = false;

    #[ORM\ManyToMany(targetEntity: Doctors::class, mappedBy: 'TreatedUsers')]
    private Collection $TreatingDoctors;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Appointment::class , cascade: ['remove'])]
    private Collection $appointments;

    public function __construct()
    {
        $this->TreatingDoctors = new ArrayCollection();
        $this->appointments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->FirstName;
    }

    public function __toString(): string
    {
        return $this->getFirstName() . ' ' . $this->getLastName();
    }

    public function setFirstName(string $FirstName): self
    {
        $this->FirstName = $FirstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->LastName;
    }

    public function setLastName(string $LastName): self
    {
        $this->LastName = $LastName;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->PhoneNumber;
    }

    public function setPhoneNumber(string $PhoneNumber): self
    {
        $this->PhoneNumber = $PhoneNumber;

        return $this;
    }

    public function getFullName(): string 
    {
        return $this->getFirstName() . ' ' . $this->getLastName();  
    }

    public function getDateofBirth(): ?\DateTimeInterface
    {
        return $this->DateofBirth;
    }
    public function setDateofBirth(\DateTimeInterface $DateofBirth): self {
         $this->DateofBirth = $DateofBirth; return $this; 
        }

    public function getIsVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getTreatingDoctors(): Collection
    {
        return $this->TreatingDoctors;
    }

    public function addTreatingDoctor(Doctors $doctor): self
    {
        if (!$this->TreatingDoctors->contains($doctor)) {
            $this->TreatingDoctors[] = $doctor;
            $doctor->addTreatedUser($this);
        }

        return $this;
    }

    public function removeTreatingDoctor(Doctors $doctor): self
    {
        if ($this->TreatingDoctors->removeElement($doctor)) {
            $doctor->removeTreatedUser($this);
        }

        return $this;
    }

    public function getAppointments(): Collection
    {
        return $this->appointments;
    }

    public function addAppointment(Appointment $appointment): self
    {
        if (!$this->appointments->contains($appointment)) {
            $this->appointments[] = $appointment;
            $appointment->setUser($this);
        }

        return $this;
    }

    public function removeAppointment(Appointment $appointment): self
    {
        if ($this->appointments->removeElement($appointment)) {
            // set the owning side to null (unless already changed)
            if ($appointment->getUser() === $this) {
                $appointment->setUser(null);
            }
        }

        return $this;
    }

    public function getUserPicture(): ?string
    {
        return $this->UserPicture;
    }

    public function setUserPicture(?string $UserPicture): self
    {
        $this->UserPicture = $UserPicture;

        return $this;
    }

    public function getUserPictureFile(): ?File
    {
        return $this->UserPictureFile;
    }

    public function setUserPictureFile(?File $UserPictureFile = null): self
    {
        $this->UserPictureFile = $UserPictureFile;
        return $this;
    }

    public function serialize(): string
    {
        return serialize([
            $this->id,
            $this->email,
            $this->roles,
            $this->password,
            $this->FirstName,
            $this->LastName,
            $this->PhoneNumber,
            $this->UserPicture,
            $this->DateofBirth,
            $this->isVerified,
            // add other properties that you want to serialize here...
        ]);
    }

    public function unserialize($serialized): void
    {
        [
            $this->id,
            $this->email,
            $this->roles,
            $this->password,
            $this->FirstName,
            $this->LastName,
            $this->PhoneNumber,
            $this->UserPicture,
            $this->DateofBirth,
            $this->isVerified,
            // add other properties that you want to unserialize here...
        ] = unserialize($serialized);
    }
}