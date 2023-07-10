<?php

namespace App\Entity;

use App\Repository\AppointmentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AppointmentRepository::class)]
class Appointment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'appointments')]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'appointments')]
    private ?Doctors $doctor = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $appointmentDate = null;

    #[ORM\Column(name: "stripe_payment", length: 255, nullable: true)]
    private ?string $StripePayment = 'Not Payed';

    #[ORM\OneToMany(mappedBy: 'appointment', targetEntity: MReport::class , cascade: ['remove'])]
    private Collection $mReports;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Token = "No Call Yet";

    public function __construct()
    {
        $this->mReports = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getDoctor(): ?Doctors
    {
        return $this->doctor;
    }

    public function setDoctor(?Doctors $doctor): self
    {
        $this->doctor = $doctor;

        return $this;
    }

    public function getAppointmentDate(): ?\DateTimeInterface
    {
        return $this->appointmentDate;
    }

    public function setAppointmentDate(\DateTimeInterface $appointmentDate): self
    {
        $this->appointmentDate = $appointmentDate;

        return $this;
    }

    public function getStripePayment(): ?string
    {
        return $this->StripePayment;
    }

    public function setStripePayment(string $StripePayment): self
    {
        $this->StripePayment = $StripePayment;

        return $this;
    }

    /**
     * @return Collection<int, MReport>
     */
    public function getMReports(): Collection
    {
        return $this->mReports;
    }

    public function addMReport(MReport $mReport): self
    {
        if (!$this->mReports->contains($mReport)) {
            $this->mReports->add($mReport);
            $mReport->setAppointment($this);
        }

        return $this;
    }

    public function removeMReport(MReport $mReport): self
    {
        if ($this->mReports->removeElement($mReport)) {
            // set the owning side to null (unless already changed)
            if ($mReport->getAppointment() === $this) {
                $mReport->setAppointment(null);
            }
        }

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->Token;
    }

    public function setToken(?string $Token): self
    {
        $this->Token = $Token;

        return $this;
    }
}
