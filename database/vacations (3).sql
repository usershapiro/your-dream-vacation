-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2023 at 11:00 AM
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
(1, 3),
(7, 4),
(1, 1),
(1, 1),
(1, 25),
(4, 25),
(16, 22),
(16, 22),
(16, 22),
(16, 22),
(16, 4),
(17, 4),
(17, 4),
(17, 4),
(1, 4),
(1, 4),
(1, 25),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(19, 22),
(15, 4),
(15, 4),
(15, 22),
(15, 3),
(1, 4),
(1, 4),
(1, 4),
(1, 4),
(1, 4),
(1, 3),
(1, 4),
(1, 25),
(1, 6),
(1, 3),
(1, 25),
(1, 4),
(1, 4),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 4),
(1, 4),
(1, 4),
(1, 4),
(1, 4),
(1, 4),
(1, 25),
(1, 3),
(1, 4),
(1, 21),
(1, 21),
(1, 4),
(1, 22),
(1, 4);

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
(4, 'faigy', 'shapiro', 'faigyshapiro@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'user'),
(5, 'אליהו ', 'שפירא', 'faigyshapiro@gmail.com', 'e5edac70074791372c84b5b156299a730c4c60dd17c0cffb9e1f9fa75a09e874e496d5621955d2bb44ad152523217b4624d0a3b2cda162689933ff2eca24922d', 'user'),
(7, 'yael', 'levi', 'yael@gmail.com', 'dd58f71b3ce0bffdc3c53435ac4b065f82cb0f77ef13051c2f3bc639c5e5ffeac4a9b8af95026fa637a0a7210817e1aef9f3d9e07a821d70028d41203d4c7498', 'user'),
(8, 'BBBB', 'BBBB', 'BBBB@gmail.com', 'b2ae25ef90f896371c8de8ae7c124461db215800b9364fa56850fdcd529ef28b3b353bceec99f7f506e84c497f48ef636b2aaa6815f8d5cdbf1fc5fbe0d2b884', 'user'),
(10, 'diza', 'diza', 'd@gmail.com', '17e98e891d4fc43c0c41ae91a5462161de5f0dd070f30c21a9217de3b273040d670042eaef20919d5ff58a806f069f67da20050034608fb767d3f830ed729aff', 'user'),
(11, 'BBBB', 'BBBB', 'BBBB@gmail.com', 'b2ae25ef90f896371c8de8ae7c124461db215800b9364fa56850fdcd529ef28b3b353bceec99f7f506e84c497f48ef636b2aaa6815f8d5cdbf1fc5fbe0d2b884', 'user'),
(12, 'BBBB', 'BBBB', 'BBBB@gmail.com', 'b2ae25ef90f896371c8de8ae7c124461db215800b9364fa56850fdcd529ef28b3b353bceec99f7f506e84c497f48ef636b2aaa6815f8d5cdbf1fc5fbe0d2b884', 'user'),
(13, '2222', '2222', '2222@gmail.com', 'dd58f71b3ce0bffdc3c53435ac4b065f82cb0f77ef13051c2f3bc639c5e5ffeac4a9b8af95026fa637a0a7210817e1aef9f3d9e07a821d70028d41203d4c7498', 'user'),
(14, 'basi', 'basi', 'basi@gmail.com', '44056d3308fd4d6204243513e08b6f2d978a1be6d52bde47c5784afb796f1f6b9b5873816ad84d5f0beb1c95af44e053d9ae55e9ea8bdc363c381eb1ed1c3b06', 'user'),
(15, 'boss', 'boss', 'boss@gmail.com', 'b95f32f146f48dabde1cba077868594749e781b3cca379551a62afe116d0ffec246daa5bfa5ae9f74503c1c06674b5db875eadd594614597043c54207077bd3c', 'admin'),
(16, 'mama', 'mama', 'mama@gmail.com', '792d23e0cd13ef6f35f1651ffb3e67a7154997ef7f99183a87e5593d5ff3b9caa79e09803de825c17fc38d0088c25a9e452013e59aef99ef70e4eeb6f46cc763', 'user'),
(17, 'gella', 'gella', 'gella@gmail.com', 'd0924ff0c532328185b1993a0d2cdd6d90237ea8adb4ddceab79595f7848d41a8bd7b2a2910fd079ab14affd7be0f68749e72787e57f81a19b1834944ac99257', 'user'),
(18, 'Dina', 'altman', 'dina@gmail.com', '5335857302dc6edefd29a33a63f5fe0519f629476a5ed6f8c3d2aff346276851aa67f4ca4d5650c70837aeb65ab9733f1900d722794ced42da3c275a295a7c36', 'user'),
(19, 'webi', 'webi', 'webi@gmail.com', 'b84be8bcc1df162ff5c94c8e58e7b558d4639dbce77f916ec54c385169e7af5e7bfb75805539c53ceea6bf5b5b26b1bad5d87f643df4c5bdc52686dcd0aea403', 'user'),
(20, 'asaf', 'asaf', 'asaf@gmail.com', 'f1852f38e62c9cc1c9cf4c1e1fd8205d1985ab4c972d6c9d8e3250d8b3484740f56a8bf2ab2f831cf959a2e64a46da251f712806fb8776d5498649349dd19df5', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationCode` int(11) NOT NULL,
  `destination` varchar(300) NOT NULL,
  `description` varchar(900) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int(11) NOT NULL,
  `imageFile` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationCode`, `destination`, `description`, `startDate`, `endDate`, `price`, `imageFile`) VALUES
(1, 'Venice', 'Discover the delights of this captivating city with a Venice vacation package that\'s tailored to you. Rialto Bridge, St. Marks Basilica and St. Marks Square are just a few of the attractions you\'ll want to explore during your trip to Venice', '2023-06-12', '2023-06-19', 7900, 'venice.jpg'),
(3, 'London', 'Hello, London! The iconic capital of the United Kingdom is one of the world’s grandest cities. The ultimate urban getaway, London flourishes with art, architecture, history, nature, nightlife and more...', '2023-06-01', '2023-06-10', 4900, 'london.jpg'),
(4, 'New-York', '\"The famous Big Apple\"; New York City (one of the world\'s largest entertainment capitals; with world-class museums, amazing food and shows); - where there is always something new and thrilling to discover', '2023-06-01', '2023-06-08', 5000, 'new-york.jpg'),
(6, 'Greece', 'The best sites ever!', '2023-06-21', '2023-06-21', 8000, 'greece.jpg'),
(17, 'Rome', 'the cheapest vacation ever!', '2023-06-23', '2023-06-25', 7, '4d58742a-7b78-4cb7-8201-e220ef269287.jpg'),
(21, 'Reefs diving', 'explore underwater', '2023-06-20', '2023-07-20', 3823, 'fc0f743f-d755-4909-b062-408e117d9b1d.jpg'),
(22, 'Swiss', 'swiss', '2023-06-04', '2023-06-12', 3214, 'c3e2be80-a4f0-4f68-a340-879d9d615ca5.jpg'),
(24, 'Alaska', 'freezing vacation', '2023-06-12', '2023-06-05', 5, 'a1479f33-9c5d-42f9-ab91-1621b843c1c6.jpg'),
(25, 'Lapland', 'noryh vacation', '2023-06-07', '2023-06-20', 2345, '458d9aa2-0e3a-4de7-ad00-64c6740423c5.jpg'),
(27, 'Israel', 'The holy Land', '2023-07-07', '2023-07-19', 2345, '7c16b02c-61d0-47c5-a229-4af584e37841.webp'),
(28, 'Amazon river', 'exotic trip', '2023-07-12', '2023-07-16', 2567, '120b180f-504c-4677-a270-7c165e30c376.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD KEY `id` (`id`),
  ADD KEY `vacationCode` (`vacationCode`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`vacationCode`) REFERENCES `vacations` (`vacationCode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
