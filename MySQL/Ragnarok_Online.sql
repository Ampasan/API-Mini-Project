SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

CREATE DATABASE IF NOT EXISTS `ragnarok_online` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ragnarok_online`;

CREATE TABLE IF NOT EXISTS `class_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_name` varchar(20) NOT NULL,
  `primary_weapon` varchar(10) NOT NULL,
  `skills` text NOT NULL,
  `job_level` int(5) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `class_info` VALUES
(1, 'Swordsman', 'Sword', '[Bash, Provoke, Endure]', 50, 'A melee class focused on physical combat.'),
(2, 'Mage', 'Staff', '[Fire Bolt, Frost Driver, Napalm Beat]', 50, 'A magic-based class using elemental spells.'),
(3, 'Rogue', 'Dagger', '[Backstab, Stalk, Double Strafe]', 50, 'A stealthy class specializing in deception and quick attacks.'),
(4, 'Arch Bishop', 'Staff', '[Heal, Sanctuary, Judex]', 70, 'A divine class focused on healing and support magic.'),
(5, 'Ranger', 'Bow', '[Arrow Strom, Camouflage, Electric Shock]', 70, 'A versatile class excelling in ranged combat and survival skills.');