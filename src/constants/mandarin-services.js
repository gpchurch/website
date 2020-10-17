import SeekPointType from './seek-point-type';

const mandarinServices = [
    { youtubeVideoID: "7RsjtD3EdeI", topic: "(blank message title)", pastor: "Pastor Chien Chen", date: "2020-10-18T18:10:00Z", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "wFXd4V9iNFw", topic: "(blank message title)", pastor: "Pastor Weizhong Sun", date: "2020-10-11T18:10:00Z", duration: "01:41:35", seekPoints: [
        {time: "00:00:20", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:10:25", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:12:33", label: "Praise song 1", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:18", label: "Praise song 2", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:21", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:24:18", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:25:00", label: "Amazing Grace?", type: SeekPointType.PRAISE_SONG},
        {time: "00:29:17", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:33:10", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:20:58", label: "Respond song?", type: SeekPointType.PRAISE_SONG},
        {time: "01:25:14", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:27:20", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:36:34", label: "Youth Praise Night", type: SeekPointType.VIDEO},
        {time: "01:40:06", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Li5Pd6IXhE4", topic: "(blank message title)", pastor: "Pastor Peter Liu", date: "2020-10-04T18:10:00Z", duration: "01:35:33", seekPoints: [
        {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:09:55", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:22", label: "Praise song 1", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:54", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:17:57", label: "Praise song 2", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:48", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:27:06", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:29:49", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:20:00", label: "Communion", type: SeekPointType.COMMUNION},
        {time: "01:26:02", label: "Communion song", type: SeekPointType.PRAISE_SONG},
        {time: "01:30:06", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:34:02", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "AYadEf1YjVk", topic: "(blank message title)", pastor: "Pastor Chien Chen", date: "2020-09-27T18:10:00Z", duration: "01:31:15", seekPoints: [
        {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:10:02", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:46", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:12:51", label: "Crown Him with Many Crowns", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:40", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:17:08", label: "Praise song 2", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:14", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:20:38", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:25:23", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:25:45", label: "Praise song 4", type: SeekPointType.PRAISE_SONG},
        {time: "00:31:01", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:35:13", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:25:31", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:26:47", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:30:06", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "R0ikzK-juhI", topic: "(blank message title)", pastor: "Pastor Peter Liu", date: "2020-09-20T18:10:00Z", duration: "01:40:39", seekPoints: [
        {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:10:04", label: "Bible verse", type: SeekPointType.BIBLE_VERSE},
        {time: "00:11:33", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:13:10", label: "Jesus, My Everything", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:50", label: "Praise song 2", type: SeekPointType.PRAISE_SONG},
        {time: "00:22:02", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:27:50", label: "Members singing", type: SeekPointType.VIDEO},
        {time: "00:32:18", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:34:30", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:24:06", label: "Missions at GPCCC?", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:34:18", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:36:51", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:39:24", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
];

export default mandarinServices;