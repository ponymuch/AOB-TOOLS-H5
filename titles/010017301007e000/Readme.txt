  ____  _                            __   ____                                                       
 / ___|| |_ ___  _ __ _   _    ___  / _| / ___|  ___  __ _ ___  ___  _ __  ___                       
 \___ \| __/ _ \| '__| | | |  / _ \| |_  \___ \ / _ \/ _` / __|/ _ \| '_ \/ __|                      
  ___) | || (_) | |  | |_| | | (_) |  _|  ___) |  __| (_| \__ | (_) | | | \__ \                      
 |____/ \__\___/|_|   \__, |  \___/|_|   |____/ \___|\__,_|___/\___/|_| |_|___/           by Crazy P.
  ____  _             |___/                       __    ___  _ _             _____                   
 |  _ \(_) ___  _ __   ___  ___ _ __ ___    ___  / _|  / _ \| (___   _____  |_   ______      ___ __  
 | |_) | |/ _ \| '_ \ / _ \/ _ | '__/ __|  / _ \| |_  | | | | | \ \ / / _ \   | |/ _ \ \ /\ / | '_ \ 
 |  __/| | (_) | | | |  __|  __| |  \__ \ | (_) |  _| | |_| | | |\ V |  __/   | | (_) \ V  V /| | | |
 |_|   |_|\___/|_| |_|\___|\___|_|  |___/  \___/|_|    \___/|_|_| \_/ \___|   |_|\___/ \_/\_/ |_| |_|

-------------------------------------------------------------------------------------------------------------------

Title:      牧場物語 オリーブタウンと希望の大地
            Story of Seasons: Pioneers of Olive Town Japanese Version
Title ID:   010017301007E000
Build ID:   1EA294AF01F90F4C

-------------------------------------------------------------------------------------------------------------------

Usage:

Drag'n'Drop the atmosphere and/or sxos Folder to the Root of your Micro SD Card.

-------------------------------------------------------------------------------------------------------------------

Atmosphere Exclusive Cheats

- Row 2 - 4 Items x99
- Row 2 - 4 Items x999
- Row 2 - 4 Items Max Quality
- Box Items x999
- Animals Max Friedship & Happiness

There are Instructions how to make them SXOS Compatible.

-------------------------------------------------------------------------------------------------------------------

Slot Modification

1. Enable [/!\ { Master Item Slot 1 Row 2 } /!\]
2. Toggle [Your Item of Choice] On & Off (Only use one at the Time!)
3. Disable [/!\ { Master Item Slot 1 Row 2 } /!\]

If you try to enable two Cheats at the same Time, your Game will Crash!
If you don't disable the Cheat you're canstantly writing the Value 1 to the Amount Address,
if you then try to change the Amount your Game will also Crash!

-------------------------------------------------------------------------------------------------------------------

Animals Max Friedship & Happiness

If you have more/less than 20 Animals / 2 Stables increase/decrease the Hexadecimal Value "14"

[(R) Animals Max Friedship & Happiness]
80000080
580C0000 04DD44D0
580C1000 000000B8
580C1000 00000010
580C1000 00000018
580C1000 00000010
580C1000 00000010
400F0000 00000000 00000080
400B0000 00000000 00000084
300E0000 00000014 <- = 20 Animals / 2 Stables / 14 Hex = 20 Dec
989DC000
580D1000 00000030
640D01F0 00000000 0000012C
640D01B0 00000000 0000012C
780C0000 00000008
310E0000 20000000

For Up to:

10 Animals / 1 Stable  use 0A     60 Animals /  6 Stables use 3C
20 Animals / 2 Stables use 14     70 Animals /  7 Stables use 46
30 Animals / 3 Stables use 1E     80 Animals /  8 Stables use 50
40 Animals / 4 Stables use 28     90 Animals /  9 Stables use 5A
50 Animals / 5 Stables use 32    100 Animals / 10 Stables use 64

The Game looks how many Slots for Animals you have.
You can not write a Value to an Address that does not not exist
or is occupied with something else.

Max Loop Count = Number of Stables with Animals in them x10.

If you set the Animal Loop Count higher as your Number of Stables, your Game might Crash!

I Tested the Cheat with 50 Animals in 5 Stables.
For the best Results buy the Ugraded Stables.

-------------------------------------------------------------------------------------------------------------------

[Box Items x999]
580C0000 04BBA3C0
580C1000 00000068
580C1000 000000C8
580C1000 000000A8
580C1000 00000010
580C1000 00000018
400F0000 00000000 00000014
300E0000 00000018
989DC000
580D1000 00000030
640D01F0 00000000 000003E7
780C0000 00000018
310E0000 20000000

Open the Box twice for 24 x 999 Items.

-------------------------------------------------------------------------------------------------------------------

Atmosphere Info

Since only 1024 Opcodes / 128 Cheats are allowed you have to manually add the missing Items.
I included a .txt File with all Item ID's (Ready to Copy & Paste).
Simply delete what's below the [/!\ { Master Item Slot 1 Row 2 } /!\] Cheat and make your own Collection of Items.
(Delete Line 232 - 560)

-------------------------------------------------------------------------------------------------------------------

SXOS Info

SXOS's Cheat Engine tends to Enable Cheats on it's own, double Check that only your desired Item is enabled.
(In my Case it was Gibeon Stone)

In future Updates i will drop the Support for SXOS.

I'm not willing to convert every Cheat Code anymore.

Example:

Look at the Max Friendship Cheat SXOS -> AMS
(347 Lines of Code vs 15 Lines of Code)

It is easy enough to switch to Atmosphere.

I'm not always here to Hand Hold or Spoon Feed you.

- Extract 2 .zip Files to the Root of your SD Card.

- Send fusee-primary.bin with TegraRCM.

- Or rename fusee-primary.bin to payload.bin and Copy it to the Root of your SD Card
  then use the SX Boot Menu to boot Atmosphere.

Two simple steps, it can't be that difficult?

https://github.com/Atmosphere-NX/Atmosphere/releases/latest -> (download WITHOUT_MESOSPHERE)
https://github.com/ITotalJustice/patches/releases/latest -> (download fusee)

The following Steps only need to be done once

Cheats always On?

Go to Atmosphere/config_templates/system_settings.ini
or Atmosphere/config/system_settings.ini

Change:

; dmnt_cheats_enabled_by_default = u8!0x1
or
; dmnt_cheats_enabled_by_default = u8!0x0

to 

dmnt_cheats_enabled_by_default = u8!0x0

Copy system_settings.ini from:

Atmosphere/config_templates/system_settings.ini

to

Atmosphere/config/system_settings.ini

EdizonSE & Tesla Overlay

https://github.com/tomvita/EdiZon-SE/releases/latest
https://github.com/WerWolv/Tesla-Menu/releases/latest
https://github.com/WerWolv/nx-ovlloader/releases/latest
https://werwolv.net/downloads/EdiZonOverlay.zip

Extract all Contents to the Root of your Micro SD Card.

(Highlight all .zip Files Press extract here.
Copy the atmosphere & switch Folder to the Root of your Micro SD Card)

https://gbatemp.net/threads/tesla-the-nintendo-switch-overlay-menu.557362/

Keep / Make an SXOS Emunand

Use Hekate to migrate your SXOS Emunand to Atmosphere.

https://github.com/CTCaer/hekate/releases/latest

Or Make an 11.0.0 SXOS Emunand just for XCI loading.

XCI's belong anyway only to your External Hard Drive.

The Effort and Amount of Time it takes to install an XCI / NSP is the same
as Copying the XCI to your Micro SD Card.

Simply use DBI (Duck Bill Installer)

You literally only have to Drag'n'Drop your XCI / NSP via MTP Install to you SD Card.

https://github.com/rashevskyv/dbi/releases/latest

The SXOS Cheat Engine is Outdatet and Bugged since 2.9.x. or even longer.
(I like the RAM Editor though, but Edizon catches up..)

-------------------------------------------------------------------------------------------------------------------

RyujiNX / YUZU Info

I'm not using any Emulator, these Cheats were done for the Switch, so don't expect any Support from me.

-------------------------------------------------------------------------------------------------------------------

General Info

Cheats manipulate your Game in a way that was not intended.
Therefore the Risk of corrupted Saves always remains.
To avoid this Problem simply Backup your Saves regularly with JKSV or Checkpoint.
In Case something happens, simply revert back to a working State.

YOU and only YOU are Responsible for your Saves.

JKSV
https://github.com/J-D-K/JKSV/releases/latest

Checkpoint
https://github.com/FlagBrew/Checkpoint/releases/latest

-------------------------------------------------------------------------------------------------------------------

Animals Max Friedship & Happiness

[1st Animal Max Friedship]
580C0000 04DD44D0
580C1000 000000B8
580C1000 00000010
580C1000 00000018
580C1000 00000010
580C1000 00000010
580C1000 00000030 +8 -> next Animal
780C0000 00000080
640C0000 00000000 0000012C

[1st Animal Max Happiness]
580C0000 04DD44D0
580C1000 000000B8
580C1000 00000010
580C1000 00000018
580C1000 00000010
580C1000 00000010
580C1000 00000030 +8 -> next Animal
780C0000 00000084
640C0000 00000000 0000012C

Use the Windows Calculator in Programmer Mode or any DEC to HEX Converter to Calculate the next Offset. (Hex +8)

-------------------------------------------------------------------------------------------------------------------

Box Items x999

[1st Item Box 1 x999]
580C0000 04BBA3C0
580C1000 00000068
580C1000 000000C8
580C1000 000000A8
580C1000 00000010
580C1000 00000018
580C1000 00000030 +18 Next Item in Box
780C0000 00000014
640C0000 00000000 000003E7

Use the Windows Calculator in Programmer Mode or any DEC to HEX Converter to Calculate the next Offset. (Hex +18)

-------------------------------------------------------------------------------------------------------------------

Friendship Cheats

If you only want to Max out the Friendship of an individual Villager use the following Cheats.

[Max Friendship Angela]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000288
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Beth]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000001F8
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Blaire]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000000C0
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Bridget]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000000A8
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Cindy]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000002A0
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Clemens]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000228
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Damon]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000078
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Dosetsu]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000318
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Emilio]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000048
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Georg]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000168
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Gloria]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000138
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Iori]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000030
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Jack]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000060
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Jacopo]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000150
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Jason]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000001B0
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Jessie]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000270
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Karina]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000390
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Lars]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000240
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Laura]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000000D8
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Linh]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000000F0
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Lovette]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000378
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Manuela]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000002E8
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Marcos]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000002D0
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Mikey]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000001E0
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Misaki]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000210
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Nguyen]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000002B8
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Nigel]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000198
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Norman]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000348
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Patricia]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000180
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Ralph]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000090
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Raul]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000300
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Reina]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000108
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Sally]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000001C8
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Sidney]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000360
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Simon]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000258
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship Victor]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000120
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship ???]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 00000330
780C0000 00000010
640C0000 00000000 0000DAC0

[Max Friendship ???]
580C0000 0465ADA0
580C1000 00000040
580C1000 000000B8
580C1000 00000000
580C1000 00000030
580C1000 00000018
580C1000 000003A8
780C0000 00000010
640C0000 00000000 0000DAC0

-------------------------------------------------------------------------------------------------------------------

Do not repost my Cheats on Cheatslips!

-------------------------------------------------------------------------------------------------------------------

Credits: Angely, bbhark, crazy_p, IMNoob, Merlin555