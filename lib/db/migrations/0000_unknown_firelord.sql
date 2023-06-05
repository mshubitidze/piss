CREATE TABLE `piss_prize` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`isWinning` boolean DEFAULT false,
	`isWon` boolean DEFAULT false,
	`imageUrl` text);
