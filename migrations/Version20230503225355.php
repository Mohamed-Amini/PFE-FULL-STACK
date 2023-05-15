<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230503225355 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // Create the doctor_user_treatment table
        $this->addSql('CREATE TABLE doctor_user_treatment (
            doctor_id INT NOT NULL,
            user_id INT NOT NULL,
            treated_at DATETIME NOT NULL,
            PRIMARY KEY (doctor_id, user_id, treated_at),
            INDEX IDX_F54B0F4FEBB2ECAA (doctor_id),
            INDEX IDX_F54B0F4FA76ED395 (user_id),
            CONSTRAINT FK_F54B0F4FEBB2ECAA FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE,
            CONSTRAINT FK_F54B0F4FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');

        // Change the table engine to InnoDB if it's not already
        $this->addSql('ALTER TABLE doctor_user_treatment ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // Drop the doctor_user_treatment table
        $this->addSql('DROP TABLE doctor_user_treatment');
    }
}