const ICONS_DIR = "/icons";
const IMAGES_DIR = "/images";

export const ICONS = {
  SETTINGS: `${ICONS_DIR}/settings.png`,
  STAR: `${ICONS_DIR}/star.png`,
  PROFILE: `${ICONS_DIR}/profile.png`,
  SEARCH: `${ICONS_DIR}/search.png`,
  FRIENDS: `${ICONS_DIR}/friends.png`,
  CLOCK: `${ICONS_DIR}/clock.png`,
  NOTFOUND: `${ICONS_DIR}/404.png`,
  LOCK: `${ICONS_DIR}/padlock.png`,
  BELL: `${ICONS_DIR}/bell.png`,
  INFO: `${ICONS_DIR}/information.png`,
  CANCEL: `${ICONS_DIR}/cancel.png`,
  CHECKED: `${ICONS_DIR}/checked.png`,
  GIFT: `${ICONS_DIR}/gift.png`,
  WARNING: `${ICONS_DIR}/warning.png`,
  SUPPORT: `${ICONS_DIR}/support.png`,
  REPORT: `${ICONS_DIR}/report.png`,
  COMMUNITY: `${ICONS_DIR}/community.png`,
  WALLET: `${ICONS_DIR}/wallet.png`,
  NINJA: `${ICONS_DIR}/ninja.png`,
  DEAL: `${ICONS_DIR}/deal.png`,
  BACKPACK: `${ICONS_DIR}/backpack.png`,
  CALENDAR: `${ICONS_DIR}/calendar.png`,
  BOOK: `${ICONS_DIR}/book.png`,
  GAS_MASK: `${ICONS_DIR}/gas-mask.png`,
  SHARE: `${ICONS_DIR}/share.png`,
  TELEGRAM: `${ICONS_DIR}/telegram.png`,
  STATISTICS: `${ICONS_DIR}/statistics.png`,
  PIN: `${ICONS_DIR}/pin.png`,
  CLIPBOARD: `${ICONS_DIR}/clipboard.png`,
  REGION: `${ICONS_DIR}/region.png`,
  UKRAINE: `${ICONS_DIR}/ukraine.png`,
  UNITED_KINGDOM: `${ICONS_DIR}/united-kingdom.png`,
  SOS: `${ICONS_DIR}/sos.png`,
  ANGEL: `${ICONS_DIR}/angel.png`,
} as const;

export const COUNTRY_ICONS = {
  ua: ICONS.UKRAINE,
  gb: ICONS.UNITED_KINGDOM,
} as const;

export const NOTIFICATION_ICONS = {
  NOTIFICATION: ICONS.INFO,
  GIFT: ICONS.GIFT,
  WARNING: ICONS.WARNING,
  CANCEL: ICONS.CANCEL,
  CLOCK: ICONS.CLOCK,
  SETTINGS: ICONS.SETTINGS,
  CHECKED: ICONS.CHECKED,
} as const;

export const IMAGES = {
  USER: `${IMAGES_DIR}/user.png`,
  OBJECT: `${IMAGES_DIR}/object.png`,
  POST: `${IMAGES_DIR}/post.png`,
  EVENT: `${IMAGES_DIR}/event.png`,
};

export const STUBS = {
  USER: IMAGES.USER,
  OBJECT: IMAGES.OBJECT,
  POST: IMAGES.POST,
  EVENT: IMAGES.EVENT,
};

export const ALTS = {
  USER_AVATAR: "User photo",
  BLOCK_ICON: "Block icon",
  NOTIFICATION_ICON: "Notification icon",
  FOOTER_LINK: "Footer link",
  SHARE_ICON: "Share icon",
  TELEGRAM_ICON: "Telegram icon",
  UNAVAILABLE_ICON: "Unavailable page icon",
  OBJECT_PHOTO: "Abandoned object photo",
  POST_PHOTO: "Blog post photo",
  EVENT_PHOTO: "Event photo",
  LANGUAGE_ICON: "Language icon",
} as const;
