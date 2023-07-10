<?php

namespace App\Entity;

use App\Repository\MReportRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MReportRepository::class)]
class MReport
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'mReports')]
    private ?Appointment $appointment = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Report = null;
    
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $createdAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAppointment(): ?Appointment
    {
        return $this->appointment;
    }

    public function setAppointment(?Appointment $appointment): self
    {
        $this->appointment = $appointment;

        return $this;
    }

    public function getReport(): ?string
    {
        return $this->Report;
    }

    public function setReport(string $Report): self
    {
        $this->Report = $Report;

        return $this;
    }
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    #[ORM\PrePersist]
    public function setCreatedAt(): void 
    {
        $this->createdAt = new \DateTimeImmutable();
}
}