// 9. Say you have a program which handles the login queue to a game server. 
//The game server is able to log in one person every one second. Assume that one second 
//must elapse after a person logs in with an empty queue before they are removed from the queue. 
//Draw the state of the queue at 12:00:06, considering the following sequence of events:

// At 12:00:00 Hades logs in
// At 12:00:00 Ares logs in
// At 12:00:00 Zeus logs in
// At 12:00:00 Buzz Light Year logs in
// At 12:00:02 Kanye West logs in
// At 12:00:03 Taylor Swift logs in
// At 12:00:03 Darkwing Duck logs in
// At 12:00:04 Evil Mickey logs in.

Queue is FIFO

12:00

buzz light year
zeus
ares
hades

12:01


buzz light year
zeus
ares

12:02

kanye west
buzz light year
zeus

12:03

taylor swift
kanye west
buzz light year

12:04

evil mickey
taylor swift
kanye west

12:05

evil mickey
taylor swift

12:06

evil mickey