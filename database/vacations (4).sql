-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2023 at 03:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations`
--
CREATE DATABASE IF NOT EXISTS `vacations` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacations`;

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `vacationCode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`id`, `vacationCode`) VALUES
(1, 6),
(1, 25),
(1, 25),
(1, 3),
(24, 36),
(24, 25),
(24, 35),
(24, 3),
(1, 36),
(1, 39);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(300) NOT NULL,
  `role` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role`) VALUES
(1, 'faigy', 'shapiro', 'faigyshapiro@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'user'),
(2, 'yossi', 'levi', 'eli@gmail.com', 'c979336dbc2ffd6c7140794edf2f3a7630a9a1776f26539b761da924c71e398f09daafff134cd365ee8b4f3857b1b69b06e428a89189dbd05b99c317980c9829', 'user'),
(3, 'eli', 'landu', 'eli@gmail.com', '368b41408568b64fdcf5eb1a4b6cca48403b2ae63ea2289aab77d77382589eed47ff59eb97abec18c77a2dc73a068b4a64111bc475d7d53e4ff92dd4d930c9dd', 'user'),
(7, 'yael', 'levi', 'yael@gmail.com', 'dd58f71b3ce0bffdc3c53435ac4b065f82cb0f77ef13051c2f3bc639c5e5ffeac4a9b8af95026fa637a0a7210817e1aef9f3d9e07a821d70028d41203d4c7498', 'user'),
(10, 'diza', 'diza', 'd@gmail.com', '17e98e891d4fc43c0c41ae91a5462161de5f0dd070f30c21a9217de3b273040d670042eaef20919d5ff58a806f069f67da20050034608fb767d3f830ed729aff', 'user'),
(13, '2222', '2222', '2222@gmail.com', 'dd58f71b3ce0bffdc3c53435ac4b065f82cb0f77ef13051c2f3bc639c5e5ffeac4a9b8af95026fa637a0a7210817e1aef9f3d9e07a821d70028d41203d4c7498', 'user'),
(14, 'basi', 'basi', 'basi@gmail.com', '44056d3308fd4d6204243513e08b6f2d978a1be6d52bde47c5784afb796f1f6b9b5873816ad84d5f0beb1c95af44e053d9ae55e9ea8bdc363c381eb1ed1c3b06', 'user'),
(15, 'boss', 'boss', 'boss@gmail.com', 'b95f32f146f48dabde1cba077868594749e781b3cca379551a62afe116d0ffec246daa5bfa5ae9f74503c1c06674b5db875eadd594614597043c54207077bd3c', 'admin'),
(16, 'mama', 'mama', 'mama@gmail.com', '792d23e0cd13ef6f35f1651ffb3e67a7154997ef7f99183a87e5593d5ff3b9caa79e09803de825c17fc38d0088c25a9e452013e59aef99ef70e4eeb6f46cc763', 'user'),
(17, 'gella', 'gella', 'gella@gmail.com', 'd0924ff0c532328185b1993a0d2cdd6d90237ea8adb4ddceab79595f7848d41a8bd7b2a2910fd079ab14affd7be0f68749e72787e57f81a19b1834944ac99257', 'user'),
(18, 'Dina', 'altman', 'dina@gmail.com', '5335857302dc6edefd29a33a63f5fe0519f629476a5ed6f8c3d2aff346276851aa67f4ca4d5650c70837aeb65ab9733f1900d722794ced42da3c275a295a7c36', 'user'),
(19, 'webi', 'webi', 'webi@gmail.com', 'b84be8bcc1df162ff5c94c8e58e7b558d4639dbce77f916ec54c385169e7af5e7bfb75805539c53ceea6bf5b5b26b1bad5d87f643df4c5bdc52686dcd0aea403', 'user'),
(20, 'asaf', 'asaf', 'asaf@gmail.com', 'f1852f38e62c9cc1c9cf4c1e1fd8205d1985ab4c972d6c9d8e3250d8b3484740f56a8bf2ab2f831cf959a2e64a46da251f712806fb8776d5498649349dd19df5', 'user'),
(21, 'mama', 'mama', 'mama@gmail.com', '792d23e0cd13ef6f35f1651ffb3e67a7154997ef7f99183a87e5593d5ff3b9caa79e09803de825c17fc38d0088c25a9e452013e59aef99ef70e4eeb6f46cc763', 'user'),
(22, 'yoss', 'yoss', 'yoss@gmail.com', '07d9107500e37477456497243cdd4f10469c7651c8e477fd1757e74c8dccd0436bd216f960ac1351861fb6d574a6c61e8db08cdfa9ebe3f64a5d24ba690db411', 'user'),
(23, 'גגגג', 'גגגגג', 'faigyshapiro@gmail.com', '3b14be78dd84619a29c9b44fa95f09a1faaf960b361847274b0f87b7b33107125d225f52027e1844c063b4f19737e8c47f66f1174ff13ced6c0fa4a1530891c6', 'user'),
(24, 'noam', 'noam', 'noam@gmail.com', '0898f52b315b34b85a8156ba8e3ecf860a67fe83ccf9adf1f337c928f77055fc0cb38c1b2b53bd86ba231a28c1261e0ed9ea0e2d4a32c3e8058004d2cc10f2ba', 'user'),
(25, 'faigy', 'sap', 'faigyshapiro@gmail.com', 'a995b558ac10bceeada3bc62bded1bc39f5abbb91500f9ee491153fdccbf368e376139e81042de5cc99b5549cbfe1559cd95ae54b5435098c6cab76ae116324b', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationCode` int(11) NOT NULL,
  `destination` varchar(300) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int(11) NOT NULL,
  `imageFile` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationCode`, `destination`, `description`, `startDate`, `endDate`, `price`, `imageFile`) VALUES
(3, 'London', 'Hello, London! The iconic capital of the United Kingdom is one of the world’s grandest cities. The ultimate urban getaway, London flourishes with art, architecture, history, nature, nightlife and more...', '2023-06-01', '2023-06-10', 4900, 'london.jpg'),
(6, 'Greece', 'Greece has everything you need for a summer vacation: the Mediterranean Sea, warm climate, delicious food, good wine and many historical sights. The coastline of Greece is about 9,000 miles long (10th in the world).est sites ever!', '2023-07-07', '2023-07-11', 500, 'cc417311-1feb-4ae5-852e-b2d073353603.jpg'),
(17, 'Rome', 'Rome, the charming capital of Italy, is a sprawling city studded with numerous historical landmarks and attractions. Renowned world over for its ruins, renaissance architecture, museums full of artistic treasures, grand basilicas, romantic street-side cafes and piazzas, Rome has simply too much to offer to a traveller!', '2023-07-26', '2023-07-31', 3333, '497ac062-3846-4af3-891e-c8487c2fd5a1.jpg'),
(21, 'Reefs diving', 'You have been looking forward to this dive. You take a giant step off the dive boat and find yourself in warm crystal clear tropical waters. Soon you start your descent. Around you, there are beautiful tropical fish trying to figure out who is dropping in to see them. You are headed down to a splash of color that extends as far as you can see. You have seen fish like these before when you visited an aquarium, this time it is different. They are around you, no glass, it is their home. You see a turtle graciously moving below you, it seems not to have a care in the world. Welcome to the world of reef diving.', '2023-07-13', '2023-07-24', 3823, 'fc0f743f-d755-4909-b062-408e117d9b1d.jpg'),
(22, 'Swiss', ' ‪Switzerland Travel Guide‬‏ Switzerland is known for its natural beauty, and exploring the many mountain villages is a must for travelers. The Swiss Alps make up 60 percent of the land and are some of the most beautiful mountains in the world. There are plenty of outdoor activities to be enjoyed and some of the best hiking trails in the world', '2023-08-01', '2023-08-30', 10000, '75d02557-b414-4cf1-aae9-9da12ae6f159.jpg'),
(25, 'Lapland', 'Lapland is a destination above ordinary, full of contrasts and unique natural phenomena: Midnight Sun, Polar Nights, autumn colors, Northern Lights, and Arctic cites nestled among Ice Age fells', '2023-07-19', '2023-07-23', 2345, '04cebab1-12c5-47e9-93c2-14e9d28cdd34.jpg'),
(35, 'Amazon River', 'In this Amazon rainforest tour, you’ll get into the remote heart of the jungle and visit different areas experiencing the contrast of an Amazon cruise and an Amazon lodge stay. The River Amazon is vast and beautiful and a visit should not be rushed. Most Amazon tours visit just one region of the rainforest. To start, explore the River Amazon and its major tributary the Rio Negro on a five-day cruise by small expedition vessel shared with just a handful of other travelers. Make regular landings as you head up into remote stretches of the river.', '2023-07-02', '2023-07-10', 1234, 'c01988ec-c690-4b15-8609-1c320ad2ea27.jpeg'),
(36, 'Alaska', 'Alaska is one of the most beautiful places on Earth, with endless opportunities for play year-round.', '2023-07-08', '2023-07-18', 5678, '1bfd1960-6af5-456d-b3f4-a063a9f1deab.jpg'),
(37, 'Tokyo', 'Tokyo is known for its fashion and shopping, from the trendy shopping districts of Harajuku and Shibuya, to the luxury flagships of Ginza. Shinjuku is the thriving business district; a mix of gleaming skyscrapers and atmospheric back streets with tiny bars.', '2023-07-08', '2023-07-15', 3333, '83ce7617-0bf1-4c0a-9a07-4c1c589ced18.jpg'),
(38, 'Abu-Dhabi', 'Abu Dhabi is the capital city of the UAE, one of the most modern, dynamic cities in the world. This spectacular T-shaped Island sits on the Persian Gulf connecting to the mainland by the Maqta and Musaffah bridges. The stunning skyline of the city is filled with skyscrapers, huge shopping malls, beaches and plenty of attractions. Stroll along the Corniche promenade and relax on the soft white sandy beaches, head out to Marina Island where you can travel back in time at the Heritage Village or shop at the Marina Mall, cruise to Yas Island and ride the fastest roller coaster in the world at Ferrari World.', '2023-09-01', '2023-09-14', 4567, '88d1bd29-098e-44b3-b84d-29714d545665.jpg'),
(39, 'Las-Vegas', 'Las Vegas is an iconic U.S. town known for over-the-top fun. The Las Vegas Strip is all about neon lights, casinos, lavish hotels, and restaurants helmed by some of the world\'s best chefs. Whether you\'re heading to Las Vegas to celebrate, gamble, take in a Cirque du Soleil show, or catch your favorite musician\'s residency, you\'ll find it in the city where visitors go all out for entertainment.', '2023-07-08', '2023-07-20', 9999, '9e2512c2-a2bd-48d5-98be-11ef9a79700f.jpg'),
(40, 'Venice', 'Venice is a city of grandeur and inexplicable beauty. It\'s a place where marble palaces and gothic palazzi are linked by beguiling bridges and winding canals. All surrounded by the blue waters of the lagoon which sparkles in the sunlight.', '2023-07-31', '2023-08-08', 8000, 'af593d8c-3f69-4669-992e-4f13bf98e5ab.jpg'),
(41, 'Hwaii', 'Your dream vacation -open for you now!', '2023-07-15', '2023-07-30', 5600, '69315861-adb3-4096-a9ec-649561bb5fbf.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD KEY `id` (`id`),
  ADD KEY `vacationCode` (`vacationCode`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`vacationCode`) REFERENCES `vacations` (`vacationCode`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
