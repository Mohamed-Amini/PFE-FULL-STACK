<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230613210806 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE appointment (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, doctor_id INT DEFAULT NULL, appointment_date DATETIME NOT NULL, INDEX IDX_FE38F844A76ED395 (user_id), INDEX IDX_FE38F84487F4FB17 (doctor_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE appointment ADD CONSTRAINT FK_FE38F844A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE appointment ADD CONSTRAINT FK_FE38F84487F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctors (id)');
        $this->addSql('ALTER TABLE doctor_user_treatment DROP FOREIGN KEY FK_F54B0F4FA76ED395');
        $this->addSql('ALTER TABLE doctor_user_treatment DROP FOREIGN KEY FK_F54B0F4FEBB2ECAA');
        $this->addSql('DROP TABLE doctor_user_treatment');
        $this->addSql('DROP TABLE chat_message');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE doctor_user_treatment (doctor_id INT NOT NULL, user_id INT NOT NULL, treated_at DATETIME NOT NULL, INDEX IDX_F54B0F4FEBB2ECAA (doctor_id), INDEX IDX_F54B0F4FA76ED395 (user_id), PRIMARY KEY(doctor_id, user_id, treated_at)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE chat_message (id INT AUTO_INCREMENT NOT NULL, sender VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, receiver VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, message LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE doctor_user_treatment ADD CONSTRAINT FK_F54B0F4FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE doctor_user_treatment ADD CONSTRAINT FK_F54B0F4FEBB2ECAA FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE appointment DROP FOREIGN KEY FK_FE38F844A76ED395');
        $this->addSql('ALTER TABLE appointment DROP FOREIGN KEY FK_FE38F84487F4FB17');
        $this->addSql('DROP TABLE appointment');
    }
}
