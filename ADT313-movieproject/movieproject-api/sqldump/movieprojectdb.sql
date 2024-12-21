-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2024 at 03:34 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieprojectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `casts`
--

CREATE TABLE `casts` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `url` varchar(255) NOT NULL,
  `characterName` varchar(120) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `casts`
--

INSERT INTO `casts` (`id`, `movieId`, `userId`, `name`, `url`, `characterName`, `dateCreated`, `dateUpdated`) VALUES
(1, 50839, 1, 'Jeremy Irons', 'https://image.tmdb.org/t/p/w500//w8Ct1q02Ht3sWdOSqfp3B85TzT.jpg', 'John Tuld', '2024-12-17 10:15:18', '0000-00-00 00:00:00'),
(2, 50839, 1, 'Simon Baker', 'https://image.tmdb.org/t/p/w500//oay0Lo2zl0lJdguptxgx1BK9Xq7.jpg', 'Jared Cohen', '2024-12-17 10:15:18', '0000-00-00 00:00:00'),
(3, 50839, 1, 'Paul Bettany', 'https://image.tmdb.org/t/p/w500//oNrDowF5cRtK5lJJuCAh0KeFizy.jpg', 'Will Emerson', '2024-12-17 10:15:18', '0000-00-00 00:00:00'),
(4, 50839, 1, 'Zachary Quinto', 'https://image.tmdb.org/t/p/w500//qFqIaNMcDNd693epUSXo9zOTXev.jpg', 'Peter Sullivan', '2024-12-17 10:15:18', '0000-00-00 00:00:00'),
(5, 50839, 1, 'Kevin Spacey', 'https://image.tmdb.org/t/p/w500//nPrUZDEbGQe6jwpVbHKJCXsMd7r.jpg', 'Sam Rogers', '2024-12-17 10:15:18', '0000-00-00 00:00:00'),
(6, 50839, 1, 'Penn Badgley', 'https://image.tmdb.org/t/p/w500//cWvqsJyD8wLZ9GXs2DqqepBIfdD.jpg', 'Seth Bregman', '2024-12-17 10:15:18', '0000-00-00 00:00:00'),
(7, 50839, 1, 'Stanley Tucci', 'https://image.tmdb.org/t/p/w500//q4TanMDI5Rgsvw4SfyNbPBh4URr.jpg', 'Eric Dale', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(8, 50839, 1, 'Ashley Williams', 'https://image.tmdb.org/t/p/w500//kaZQMxVAX2Z0M0BKphkg7rT54pi.jpg', 'Heather Burke', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(9, 50839, 1, 'Mary McDonnell', 'https://image.tmdb.org/t/p/w500//qqdaaFLEPXbB8thVJJkYJ4WoAuj.jpg', 'Mary Rogers', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(10, 50839, 1, 'Aasif Mandvi', 'https://image.tmdb.org/t/p/w500//hoBCqgxK2JqV3MOQYncHRMfwu8V.jpg', 'Ramesh Shah', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(11, 50839, 1, 'Susan Blackwell', 'https://image.tmdb.org/t/p/w500//151Krgu5kOlUMRNCWQOs2am8XOo.jpg', 'Lauren Bratberg', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(12, 50839, 1, 'Demi Moore', 'https://image.tmdb.org/t/p/w500//gPgZSodybMFBodw7nKRTALONIr2.jpg', 'Sarah Robertson', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(13, 50839, 1, 'Maria Dizzia', 'https://image.tmdb.org/t/p/w500//sMsBH9o1kuFeVgjX2QoXvxccKJQ.jpg', 'Executive Assistant', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(14, 50839, 1, 'Oberon K.A. Adjepong', 'https://image.tmdb.org/t/p/w500//ou7TlDIau5vJJ4Rfe8vd8uDpPeh.jpg', 'Coffee Guy', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(15, 50839, 1, 'Jimmy Palumbo', 'https://image.tmdb.org/t/p/w500//q6jxzlfYZIe77h7O1p4dWypeBaH.jpg', 'Security Guard', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(16, 50839, 1, 'Al Sapienza', 'https://image.tmdb.org/t/p/w500//tqgr67aRg1OuuRhQFd8I3JduSRD.jpg', 'Louis Carmello', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(17, 50839, 1, 'Peter Y. Kim', 'https://image.tmdb.org/t/p/w500//3UtSD87PNU6EdJpnCeSN1hfrwRN.jpg', 'Timothy Singh', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(18, 50839, 1, 'Grace Gummer', 'https://image.tmdb.org/t/p/w500//zjkPOqC81TXDfcag90y6miEOF7M.jpg', 'Lucy', '2024-12-17 10:15:19', '0000-00-00 00:00:00'),
(19, 50839, 1, 'Zachary Quinto', 'https://image.tmdb.org/t/p/w500//qFqIaNMcDNd693epUSXo9zOTXev.jpg', 'Peter Sullivan', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(20, 50839, 1, 'Paul Bettany', 'https://image.tmdb.org/t/p/w500//oNrDowF5cRtK5lJJuCAh0KeFizy.jpg', 'Will Emerson', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(21, 50839, 1, 'Kevin Spacey', 'https://image.tmdb.org/t/p/w500//nPrUZDEbGQe6jwpVbHKJCXsMd7r.jpg', 'Sam Rogers', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(22, 50839, 1, 'Penn Badgley', 'https://image.tmdb.org/t/p/w500//cWvqsJyD8wLZ9GXs2DqqepBIfdD.jpg', 'Seth Bregman', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(23, 50839, 1, 'Jeremy Irons', 'https://image.tmdb.org/t/p/w500//w8Ct1q02Ht3sWdOSqfp3B85TzT.jpg', 'John Tuld', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(24, 50839, 1, 'Simon Baker', 'https://image.tmdb.org/t/p/w500//oay0Lo2zl0lJdguptxgx1BK9Xq7.jpg', 'Jared Cohen', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(25, 50839, 1, 'Ashley Williams', 'https://image.tmdb.org/t/p/w500//kaZQMxVAX2Z0M0BKphkg7rT54pi.jpg', 'Heather Burke', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(26, 50839, 1, 'Susan Blackwell', 'https://image.tmdb.org/t/p/w500//151Krgu5kOlUMRNCWQOs2am8XOo.jpg', 'Lauren Bratberg', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(27, 50839, 1, 'Aasif Mandvi', 'https://image.tmdb.org/t/p/w500//hoBCqgxK2JqV3MOQYncHRMfwu8V.jpg', 'Ramesh Shah', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(28, 50839, 1, 'Demi Moore', 'https://image.tmdb.org/t/p/w500//gPgZSodybMFBodw7nKRTALONIr2.jpg', 'Sarah Robertson', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(29, 50839, 1, 'Mary McDonnell', 'https://image.tmdb.org/t/p/w500//qqdaaFLEPXbB8thVJJkYJ4WoAuj.jpg', 'Mary Rogers', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(30, 50839, 1, 'Stanley Tucci', 'https://image.tmdb.org/t/p/w500//q4TanMDI5Rgsvw4SfyNbPBh4URr.jpg', 'Eric Dale', '2024-12-17 10:15:24', '0000-00-00 00:00:00'),
(31, 50839, 1, 'Oberon K.A. Adjepong', 'https://image.tmdb.org/t/p/w500//ou7TlDIau5vJJ4Rfe8vd8uDpPeh.jpg', 'Coffee Guy', '2024-12-17 10:15:25', '0000-00-00 00:00:00'),
(32, 50839, 1, 'Peter Y. Kim', 'https://image.tmdb.org/t/p/w500//3UtSD87PNU6EdJpnCeSN1hfrwRN.jpg', 'Timothy Singh', '2024-12-17 10:15:25', '0000-00-00 00:00:00'),
(33, 50839, 1, 'Grace Gummer', 'https://image.tmdb.org/t/p/w500//zjkPOqC81TXDfcag90y6miEOF7M.jpg', 'Lucy', '2024-12-17 10:15:25', '0000-00-00 00:00:00'),
(34, 50839, 1, 'Jimmy Palumbo', 'https://image.tmdb.org/t/p/w500//q6jxzlfYZIe77h7O1p4dWypeBaH.jpg', 'Security Guard', '2024-12-17 10:15:25', '0000-00-00 00:00:00'),
(35, 50839, 1, 'Maria Dizzia', 'https://image.tmdb.org/t/p/w500//sMsBH9o1kuFeVgjX2QoXvxccKJQ.jpg', 'Executive Assistant', '2024-12-17 10:15:25', '0000-00-00 00:00:00'),
(36, 50839, 1, 'Al Sapienza', 'https://image.tmdb.org/t/p/w500//tqgr67aRg1OuuRhQFd8I3JduSRD.jpg', 'Louis Carmello', '2024-12-17 10:15:25', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `tmdbId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `overview` text NOT NULL,
  `popularity` float NOT NULL,
  `releaseDate` date NOT NULL,
  `voteAverage` float NOT NULL,
  `backdropPath` varchar(255) NOT NULL,
  `posterPath` varchar(255) NOT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `userId`, `tmdbId`, `title`, `overview`, `popularity`, `releaseDate`, `voteAverage`, `backdropPath`, `posterPath`, `isFeatured`, `dateCreated`, `dateUpdated`) VALUES
(2, 1, 50839, 'Margin Call', 'A thriller that revolves around the key people at an investment bank over a 24-hour period during the early stages of the financial crisis.', 22.422, '2011-02-11', 6.858, 'https://image.tmdb.org/t/p/original//thWL3gIJpi9jNW91dkMa25xExId.jpg', 'https://image.tmdb.org/t/p/original//pgMIdInSIGw0uSory7yEBFGrvIS.jpg', 1, '2024-12-14 07:12:20', '0000-00-00 00:00:00'),
(4, 1, 201088, 'Blackhat', 'Nicholas Hathaway, a furloughed convict, and his American and Chinese partners hunt a high-level cybercrime network from Chicago to Los Angeles to Hong Kong to Jakarta. As Hathaway closes in, the stakes become personal as he discovers that the attack on a Chinese nuclear power plant was just the beginning.', 30.021, '2015-01-13', 5.487, 'https://image.tmdb.org/t/p/original//1u7TuvR5mSUz2xRQhz01i75IwdT.jpg', 'https://image.tmdb.org/t/p/original//7zu6HPnKPjNA7NuR4DGRdaH0PdX.jpg', 1, '2024-12-14 07:16:02', '0000-00-00 00:00:00'),
(5, 1, 1108693, 'Bitcoin', 'Two friends plan to swindle a stranger', 0.211, '2023-04-18', 0, 'https://image.tmdb.org/t/p/original/null', 'https://image.tmdb.org/t/p/original//b4nC9VEdOnJ8QUCNQrsmQyGeWcC.jpg', 1, '2024-12-14 07:16:56', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `middleName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `middleName`, `lastName`, `contactNo`, `role`) VALUES
(1, 'test@mail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'string', 'string', 'string', 'string', 'admin'),
(2, 'test0@mail.com', '90f2c9c53f66540e67349e0ab83d8cd0', 'Nathaniel', 'Dela Cruz', 'Gonzales', '09511253832', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `casts`
--
ALTER TABLE `casts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `casts`
--
ALTER TABLE `casts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
