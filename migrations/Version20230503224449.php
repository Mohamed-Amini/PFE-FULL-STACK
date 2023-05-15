<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230503224449 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // Modify the doctors_user table to include the treated_at column
        $this->addSql('ALTER TABLE doctors_user ADD treated_at DATETIME NOT NULL AFTER user_id');

        // Update the primary key to include the treated_at column
        $this->addSql('ALTER TABLE doctors_user DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE doctors_user ADD PRIMARY KEY (doctors_id, user_id, treated_at)');

        // Modify the foreign key constraints to include the treated_at column
        $this->addSql('ALTER TABLE doctors_user DROP FOREIGN KEY FK_ED2C83796425CC19');
        $this->addSql('ALTER TABLE doctors_user ADD CONSTRAINT FK_ED2C83796425CC19 FOREIGN KEY (doctors_id, treated_at) REFERENCES doctors (id, treated_at) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE doctors_user DROP FOREIGN KEY FK_ED2C8379A76ED395');
        $this->addSql('ALTER TABLE doctors_user ADD CONSTRAINT FK_ED2C8379A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        
        // Change the table engine to InnoDB if it's not already
        $this->addSql('ALTER TABLE doctors_user ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // Remove the treated_at column from the doctors_user table
        $this->addSql('ALTER TABLE doctors_user DROP treated_at');

        // Update the primary key to remove the treated_at column
        $this->addSql('ALTER TABLE doctors_user DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE doctors_user ADD PRIMARY KEY (doctors_id, user_id)');

        // Restore the original foreign key constraints
        $this->addSql('ALTER TABLE doctors_user DROP FOREIGN KEY FK_ED2C83796425CC19');
        $this->addSql('ALTER TABLE doctors_user ADD CONSTRAINT FK_ED2C83796425CC19 FOREIGN KEY (doctors_id) REFERENCES doctors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE doctors_user DROP FOREIGN KEY FK_ED2C8379A76ED395');
        $this->addSql('ALTER TABLE doctors_user ADD CONSTRAINT FK_ED2C8379A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        
        // Change the table engine back to the default if it was changed
        $this->addSql('ALTER TABLE doctors_user ENGINE = InnoDB');
    }
}