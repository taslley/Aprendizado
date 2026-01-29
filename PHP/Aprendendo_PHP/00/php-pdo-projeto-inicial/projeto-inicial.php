<?php

use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$student = new Student(
    null,
    'Tallis Tomé Dos Santos',
    new \DateTimeImmutable('2007-01-14')
);

echo $student->age();