<?php   

namespace App\Entity;

use App\Repository\DoctorsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: DoctorsRepository::class)]
class Doctors implements UserInterface, PasswordAuthenticatedUserInterface
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
    private ?string $DocFirstName = null;

    #[ORM\Column(length: 50)]
    private ?string $DocLastName = null;

    #[ORM\Column(length: 120)]
    private ?string $Specialization = null;

    #[ORM\Column(length: 20)]
    private ?string $DocPhoneNumber = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Bio = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $DocPicture = null;

    #[ORM\Column(length: 255)]
    private ?string $DocAddress = null;

    public function __toString(): string
    {
        return $this->getDocFirstName() . ' ' . $this->getDocLastName();
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

    public function getDocFirstName(): ?string
    {
        return $this->DocFirstName;
    }

    public function setDocFirstName(string $DocFirstName): self
    {
        $this->DocFirstName = $DocFirstName;

        return $this;
    }

    public function getDocLastName(): ?string
    {
        return $this->DocLastName;
    }

    public function setDocLastName(string $DocLastName): self
    {
        $this->DocLastName = $DocLastName;

        return $this;
    }

    public function getSpecialization(): ?string
    {
        return $this->Specialization;
    }

    public function setSpecialization(string $Specialization): self
    {
        $this->Specialization = $Specialization;

        return $this;
    }

    public function getDocPhoneNumber(): ?string
    {
        return $this->DocPhoneNumber;
    }

    public function setDocPhoneNumber(string $DocPhoneNumber): self
    {
        $this->DocPhoneNumber = $DocPhoneNumber;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->Bio;
    }

    public function setBio(string $Bio): self
    {
        $this->Bio = $Bio;

        return $this;
    }

    public function getDocPicture(): ?string
    {
        return $this->DocPicture;
    }

    public function setDocPicture(string $DocPicture): self
    {
        $this->DocPicture = $DocPicture;

        return $this;
    }

    public function getDocAddress(): ?string
    {
        return $this->DocAddress;
    }

    public function setDocAddress(string $DocAddress): self
    {
        $this->DocAddress = $DocAddress;

        return $this;
    }
}