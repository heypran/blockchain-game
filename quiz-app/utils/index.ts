export const getRandomEmoji = () => {
  const emojis = [
    '😄',
    '😃',
    '😀',
    '😊',
    '☺',
    '😉',
    '😍',
    '😘',
    '😚',
    '😗',
    '😙',
    '😜',
    '😝',
    '😛',
    '😳',
    '😁',
    '😔',
    '😌',
    '😒',
    '😞',
    '😣',
    '😢',
    '😂',
    '😭',
    '😪',
    '😥',
    '😰',
    '😅',
    '😓',
    '😩',
    '😫',
    '😨',
    '😱',
    '😠',
    '😡',
    '😤',
    '😖',
    '😆',
    '😋',
    '😷',
    '😎',
    '😴',
    '😵',
    '😲',
    '😟',
    '😦',
    '😧',
    '😈',
    '👿',
    '😮',
    '😬',
    '😐',
    '😕',
    '😯',
    '😶',
    '😇',
    '😏',
    '😑',
    '👲',
    '👳',
    '👮',
    '👷',
    '💂',
    '👶',
    '👦',
    '👧',
    '👨',
    '👩',
    '👴',
    '👵',
    '👱',
    '👼',
    '👸',
    '😺',
    '😸',
    '😻',
    '😽',
    '😼',
    '🙀',
    '😿',
    '😹',
    '😾',
    '👹',
    '👺',
    '🙈',
    '🙉',
    '🙊',
    '💀',
    '👽',
    '💩',
    '🔥',
    '✨',
    '🌟',
    '💫',
    '💥',
    '💢',
    '💦',
    '💧',
    '💤',
    '💨',
    '👂',
    '👀',
    '👃',
    '👅',
    '👄',
    '👍',
    '👎',
    '👌',
    '👊',
    '✊',
    '✌',
    '👋',
    '✋',
    '👐',
    '👆',
    '👇',
    '👉',
    '👈',
    '🙌',
    '🙏',
    '☝',
    '👏',
    '💪',
    '🚶',
    '🏃',
    '💃',
    '👫',
    '👪',
    '👬',
    '👭',
    '💏',
    '💑',
    '👯',
    '🙆',
    '🙅',
    '💁',
    '🙋',
    '💆',
    '💇',
    '💅',
    '👰',
    '🙎',
    '🙍',
    '🙇',
    '🎩',
    '👑',
    '👒',
    '👟',
    '👞',
    '👡',
    '👠',
    '👢',
    '👕',
    '👔',
    '👚',
    '👗',
    '🎽',
    '👖',
    '👘',
    '👙',
    '💼',
    '👜',
    '👝',
    '👛',
    '👓',
    '🎀',
    '🌂',
    '💄',
    '💛',
    '💙',
    '💜',
    '💚',
    '❤',
    '💔',
    '💗',
    '💓',
    '💕',
    '💖',
    '💞',
    '💘',
    '💌',
    '💋',
    '💍',
    '💎',
    '👤',
    '👥',
    '💬',
    '👣',
    '💭',
    '🐶',
    '🐺',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🐸',
    '🐯',
    '🐨',
    '🐻',
    '🐷',
    '🐽',
    '🐮',
    '🐗',
    '🐵',
    '🐒',
    '🐴',
    '🐑',
    '🐘',
    '🐼',
    '🐧',
    '🐦',
    '🐤',
    '🐥',
    '🐣',
    '🐔',
    '🐍',
    '🐢',
    '🐛',
    '🐝',
    '🐜',
    '🐞',
    '🐌',
    '🐙',
    '🐚',
    '🐠',
    '🐟',
    '🐬',
    '🐳',
    '🐋',
    '🐄',
    '🐏',
    '🐀',
    '🐃',
    '🐅',
    '🐇',
    '🐉',
    '🐎',
    '🐐',
    '🐓',
    '🐕',
    '🐖',
    '🐁',
    '🐂',
    '🐲',
    '🐡',
    '🐊',
    '🐫',
    '🐪',
    '🐆',
    '🐈',
    '🐩',
    '🐾',
    '💐',
    '🌸',
    '🌷',
    '🍀',
    '🌹',
    '🌻',
    '🌺',
    '🍁',
    '🍃',
    '🍂',
    '🌿',
    '🌾',
    '🍄',
    '🌵',
    '🌴',
    '🌲',
    '🌳',
    '🌰',
    '🌱',
    '🌼',
    '🌐',
    '🌞',
    '🌝',
    '🌚',
    '🌑',
    '🌒',
    '🌓',
    '🌔',
    '🌕',
    '🌖',
    '🌗',
    '🌘',
    '🌜',
    '🌛',
    '🌙',
    '🌍',
    '🌎',
    '🌏',
    '🌋',
    '🌌',
    '🌠',
    '⭐',
    '☀',
    '⛅',
    '☁',
    '⚡',
    '☔',
    '❄',
    '⛄',
    '🌀',
    '🌁',
    '🌈',
    '🌊',
    '🎍',
    '💝',
    '🎎',
    '🎒',
    '🎓',
    '🎏',
    '🎆',
    '🎇',
    '🎐',
    '🎑',
    '🎃',
    '👻',
    '🎅',
    '🎄',
    '🎁',
    '🎋',
    '🎉',
    '🎊',
    '🎈',
    '🎌',
    '🔮',
    '🎥',
    '📷',
    '📹',
    '📼',
    '💿',
    '📀',
    '💽',
    '💾',
    '💻',
    '📱',
    '☎',
    '📞',
    '📟',
    '📠',
    '📡',
    '📺',
    '📻',
    '🔊',
    '🔉',
    '🔈',
    '🔇',
    '🔔',
    '🔕',
    '📢',
    '📣',
    '⏳',
    '⌛',
    '⏰',
    '⌚',
    '🔓',
    '🔒',
    '🔏',
    '🔐',
    '🔑',
    '🔎',
    '💡',
    '🔦',
    '🔆',
    '🔅',
    '🔌',
    '🔋',
    '🔍',
    '🛁',
    '🛀',
    '🚿',
    '🚽',
    '🔧',
    '🔩',
    '🔨',
    '🚪',
    '🚬',
    '💣',
    '🔫',
    '🔪',
    '💊',
    '💉',
    '💰',
    '💴',
    '💵',
    '🎺',
    '🎷',
    '🎸',
    '👾',
    '🎮',
    '🃏',
    '🎴',
    '🀄',
    '🎲',
    '🎯',
    '🏈',
  ];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

// https://stackoverflow.com/a/12646864/18268726
export const shuffleArray = <T>(arr: T[]): T[] => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const answerNumOptionMap = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
};
const answerOptionNumMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
export const mapNumToOption = (num): string => answerNumOptionMap[num];
export const mapOptionToNum = (ans): number => answerOptionNumMap[ans];
