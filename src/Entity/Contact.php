<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 20)]
    private ?string $FName = null;

    #[ORM\Column(length: 30)]
    private ?string $LName = null;

    #[ORM\Column(length: 10)]
    private ?string $Phone = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Message = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFName(): ?string
    {
        return $this->FName;
    }

    public function setFName(string $FName): self
    {
        $this->FName = $FName;

        return $this;
    }

    public function getLName(): ?string
    {
        return $this->LName;
    }

    public function setLName(string $LName): self
    {
        $this->LName = $LName;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->Phone;
    }

    public function setPhone(string $Phone): self
    {
        $this->Phone = $Phone;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->Message;
    }

    public function setMessage(string $Message): self
    {
        $this->Message = $Message;

        return $this;
    }
}
