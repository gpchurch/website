import SeekPointType from './seek-point-type';

// 7RsjtD3EdeI 1280x720
const mandarinServices = [
    { youtubeVideoID: "4nUAo8aJNZU", message: "Truth Will Set Us Free (John 18:28-40)", pastor: "Rev. Peter Liu", date: "2020-10-25T18:10:00Z", duration: "01:24:35", seekPoints: [
        {time: "00:09:53", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:10:45", label: "Bible verse", type: SeekPointType.BIBLE_VERSE},
        {time: "00:11:28", label: "Jesus Christ is Lord", type: SeekPointType.PRAISE_SONG},
        {time: "00:14:22", label: "Jesus, the Name Above All Names", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:48", label: "Recognize You", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:35", label: "Live Sacrifice", type: SeekPointType.PRAISE_SONG},
        {time: "00:25:05", label: "Your Words", type: SeekPointType.PRAYER},
        {time: "00:29:33", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:30:36", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:23:45", label: "Closing prayer", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "7RsjtD3EdeI", message: "(blank message title)", pastor: "Pastor Chien Chen", date: "2020-10-18T18:10:00Z", duration: "01:42:25", seekPoints: [
        {time: "00:10:00", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:32", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:13:10", label: "You Are Worthy of Glory/You Are Great", type: SeekPointType.PRAISE_SONG},
        {time: "00:19:28", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:19:49", label: "Jesus Christ is Lord", type: SeekPointType.PRAISE_SONG},
        {time: "00:24:39", label: "Worker's Prayer", type: SeekPointType.PRAISE_SONG},
        {time: "00:28:19", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:28:50", label: "Praise the Lord, O My Soul", type: SeekPointType.PRAISE_SONG},
        {time: "00:33:18", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:38:52", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:17:40", label: "He Hides My Spirit", type: SeekPointType.PRAISE_SONG},
        {time: "01:23:00", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:23:47", label: "Baptism of Yong Wang", type: SeekPointType.BAPTISM},
        {time: "01:28:30", label: "Induction of new members", type: SeekPointType.NEW_MEMBERS},
        {time: "01:33:15", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:40:42", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "wFXd4V9iNFw", message: "(blank message title)", pastor: "Rev. Weizhong Sun", date: "2020-10-11T18:10:00Z", duration: "01:41:35", seekPoints: [
        {time: "00:10:25", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:12:33", label: "Worship the Lord", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:18", label: "Come Sing Loudly", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:21", label: "Fill Me", type: SeekPointType.PRAISE_SONG},
        {time: "00:24:18", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:25:00", label: "Amazing Grace", type: SeekPointType.PRAISE_SONG},
        {time: "00:29:17", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:33:10", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:20:58", label: "Unity From the Heart", type: SeekPointType.PRAISE_SONG},
        {time: "01:25:14", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:27:20", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:36:34", label: "Youth Praise Night", type: SeekPointType.VIDEO},
        {time: "01:40:06", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Li5Pd6IXhE4", message: "(blank message title)", pastor: "Rev. Peter Liu", date: "2020-10-04T18:10:00Z", duration: "01:35:33", seekPoints: [
        {time: "00:09:55", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:22", label: "My God, My Father, My Rock", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:54", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:17:57", label: "Jesus Loves You", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:48", label: "Rivers of the Holy Spirit", type: SeekPointType.PRAISE_SONG},
        {time: "00:27:06", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:29:49", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:20:00", label: "Communion", type: SeekPointType.COMMUNION},
        {time: "01:26:02", label: "Precious Cross", type: SeekPointType.PRAISE_SONG},
        {time: "01:30:06", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:34:02", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "AYadEf1YjVk", message: "(blank message title)", pastor: "Pastor Chien Chen", date: "2020-09-27T18:10:00Z", duration: "01:31:15", seekPoints: [
        {time: "00:10:02", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:46", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:12:51", label: "Crown Him with Many Crowns", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:40", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:17:08", label: "Be My Vision", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:14", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:20:38", label: "Love Each Other", type: SeekPointType.PRAISE_SONG},
        {time: "00:25:23", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:25:45", label: "I'd Go for You", type: SeekPointType.PRAISE_SONG},
        {time: "00:31:01", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:35:13", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:25:31", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:26:47", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:30:06", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "R0ikzK-juhI", message: "(blank message title)", pastor: "Rev. Peter Liu", date: "2020-09-20T18:10:00Z", duration: "01:40:39", seekPoints: [
        {time: "00:10:04", label: "Bible verse", type: SeekPointType.BIBLE_VERSE},
        {time: "00:11:33", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:13:10", label: "Jesus, My Everything", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:50", label: "Let the Love of Jesus Surround You", type: SeekPointType.PRAISE_SONG},
        {time: "00:22:02", label: "Make Me a Blesssing", type: SeekPointType.PRAISE_SONG},
        {time: "00:27:50", label: "Send Me", type: SeekPointType.PRAISE_SONG},
        {time: "00:32:18", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:34:30", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:24:06", label: "Missions at GPCCC?", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:34:18", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:36:51", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:39:24", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
];

export default mandarinServices;
