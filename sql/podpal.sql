-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS message;
DROP TABLE IF EXISTS swipe;
DROP TABLE IF EXISTS saved;
DROP TABLE IF EXISTS podcast;
DROP TABLE IF EXISTS `profile`;

CREATE TABLE profile (

                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32),
                         profileEmail VARCHAR(32) NOT NULL,
                         profileHash  CHAR(97) NOT NULL,
                         profilePhotoId VARCHAR(128) NOT NULL,
                         UNIQUE(profileEmail),
                         UNIQUE(profileId),
                         INDEX(profileId),
                         PRIMARY KEY(profileId)
);
CREATE TABLE podcast (
                       podcastId BINARY(16) NOT NULL,
                       podcastName varchar(64) NOT NULL,
                       podcastGenre VARCHAR(32) NOT NULL,
                       podcastDescription varchar(128) NOT NULL,
                       INDEX(podcastId),
                       PRIMARY KEY(podcastId)
);
CREATE TABLE saved (
                       savedId BINARY(16) NOT NULL,
                       savedPodcastId BINARY(16) NOT NULL,
                       savedProfileId BINARY(16) NOT NULL,
                       INDEX(savedId),
                       FOREIGN KEY(savedProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY (savedId)
);
CREATE TABLE swipe (
                        swiperProfileId BINARY(16) NOT NULL,
                        swipeeReceiveProfileId BINARY(16) NOT NULL,
                        swipeRight char(16) NOT NULL,
                        swipeLeft char(16) NOT NULL,
                        INDEX(swipeRight),
                        INDEX(swiperProfileId),
                        FOREIGN KEY(swiperProfileId) REFERENCES profile(profileId),
                        FOREIGN KEY(swipeeReceiveProfileId) REFERENCES profile(profileId),
                        PRIMARY KEY(swiperProfileId, swipeeReceiveProfileId)
);

CREATE TABLE message (
                    messageId Binary(16) NOT NULL,
                    messageeProfileId Binary(16) NOT NULL,
                    messageContent varchar(255) NOT NULL,
                    messageProfileId Binary(16) NOT NULL,
                    FOREIGN KEY(messageeProfileId) references profile(profileId),
                    FOREIGN KEY(messageProfileId) references profile(profileId),
                    Primary Key(messageId)

);