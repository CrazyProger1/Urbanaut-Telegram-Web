export async function GET() {
  return Response.json({
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        id: 1,
        area: null,
        name: "HVVAUL",
        description:
          "Once located in Rogan, only the **aircraft monument** near the main entrance to the territory of \"Voenved\" now serves as a reminder of the **Higher Military Aviation School of Pilots named after twice Hero of the Soviet Union S.I. Gritsevets**. This school, awarded the Order of the Red Star, was one of the USSR's premier flight schools, training future Heroes of the Soviet Union (293 in total, including 12 awarded twice and Ivan Kozhedub—awarded three times). It also prepared future astronauts (15 pilot-cosmonauts, including Alexei Leonov, the first human to conduct a spacewalk).\r\n\r\n---\r\n\r\n#### **The School’s Legacy**\r\n\r\nNestled within the Rogan residential area, this aviation school once trained **fighter pilots** for the entire country. Today, this strategic military site lies abandoned. The **MiG-21 monument** near the main entrance is the sole reminder of its past significance. However, the school's buildings—educational blocks, hangars, residential and administrative facilities—have been looted by vandals and metal scavengers.\r\n\r\n---\r\n\r\n#### **Exploring the Abandoned Site**\r\n\r\nThe school spans a large territory, complemented by vast multi-story buildings filled with countless rooms. Exploring even a single building takes at least **1.5 hours**, and a thorough tour of the area will require much more time. **Pro tip:** Bring supplies like water, as there are no nearby shops.\r\n\r\nInside, you'll encounter eerie and unsettling spaces, including vast basements. A flashlight is essential for navigating these dark, shadowy corridors. The echoing sounds in the massive structures create a chilling atmosphere, often making visitors feel as though they are not alone. Narrow, dimly-lit passages that sometimes lead to dead ends amplify the labyrinth-like experience and can trigger panic.\r\n\r\n---\r\n\r\n#### **Neighboring Areas and Security**\r\n\r\nComplete isolation from civilization is not possible here. **Residential buildings**, formerly military dormitories, are nearby. Locals are indifferent to visitors at \"Voenved.\" While security is present on-site, it is rare to encounter them. The main threats are stray dogs that act as an early warning system, barking at intruders and potentially alerting the guards.\r\n\r\nHowever, if caught by security, there's no need to worry—they will politely ask you to leave without involving law enforcement. The guards are usually stationed on the first floor of the barracks for 2nd and 3rd-year cadets or in the old **Training and Flight Department** building. Strangely, the site lacks signs of homeless individuals or drug users.\r\n\r\n---\r\n\r\nThis site stands as a somber reminder of a glorious past, offering a mix of historical intrigue and an eerie sense of abandonment.",
        short_description: "Покинуте авіаційне училище ім. С. Грицевца",
        security_level: "NONE",
        preservation_level: "HIGH",
        difficulty_level: "NEWBIE",
        created_at: "2024-12-05T16:28:41.522171Z",
        updated_at: "2024-12-08T12:22:25.081303Z",
        built_at: "2024-12-05",
        abandoned_at: "2024-12-05",
        creator: null,
        location: null,
        photo: "http://localhost:8001/api/v1/media/2/src/",
      },
      {
        id: 2,
        area: null,
        name: "TEST 2",
        description: "TEST 2",
        short_description: "Hm, short desc",
        security_level: "NONE",
        preservation_level: "HIGH",
        difficulty_level: "NEWBIE",
        created_at: "2024-12-05T17:04:32.577479Z",
        updated_at: "2024-12-07T21:15:28.612373Z",
        built_at: "2024-12-05",
        abandoned_at: "2024-12-05",
        creator: null,
        location: null,
        photo: null,
      },
    ],
  });
}
