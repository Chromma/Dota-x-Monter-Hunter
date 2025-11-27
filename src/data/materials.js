import { MAT_IDS } from './constants'; // Importamos el diccionario

export const INITIAL_MATERIALS = [
    // General
    { id: MAT_IDS.Essence, name: 'Monster Essence', category: 'General', rarity: 'Common', stock: 0 },
    { id: MAT_IDS.Fur,   name: 'Monster Fur',     category: 'General', rarity: 'Common', stock: 0 },
    { id: MAT_IDS.Cl  ,         name: 'Monster Claw',     category: 'General', rarity: 'Common', stock: 0 },
    // Odogaron
    { id: MAT_IDS.OdoSinew,     name: 'Odogaron Sinew',     category: 'Odogaron', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.OdoFang,     name: 'Odogaron Hardfang',     category: 'Odogaron', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.OdoScale,     name: 'Odogaron Scale',     category: 'Odogaron', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.OdoShard,     name: 'Odogaron Shard',     category: 'Odogaron', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.OdoMantle,     name: 'Odogaron Mantle',     category: 'Odogaron', rarity: 'Rare', stock: 0 },

    // Zinogre
    { id: MAT_IDS.ZinFur,     name: 'Zinogre Electrofur',     category: 'Zinogre', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.ZinShocker,     name: 'Zinogre Deathly Shocker',     category: 'Zinogre', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.ZinCortex,     name: 'Zinogre Cortex',     category: 'Zinogre', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.ZinHorn,     name: 'Zinogre Hardhorn',     category: 'Zinogre', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.ZinSky,     name: 'Zinogre Skymerald',     category: 'Zinogre', rarity: 'Rare', stock: 0 },

    //Rathalos
    { id: MAT_IDS.RathCarapache,     name: 'Rathalos Carapache',     category: 'Rathalos', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.RathWing,     name: 'Rathalos Wing',     category: 'Rathalos', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.RathTail,     name: 'Rathalos Tail',     category: 'Rathalos', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.RathRuby,     name: 'Rathalos Ruby',     category: 'Rathalos', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.RathPlate,     name: 'Rathalos Plate',     category: 'Rathalos', rarity: 'Rare', stock: 0 },

    //Kirin
    { id: MAT_IDS.KirThunderhorn,     name: 'Kirin Thunderhorn',     category: 'Kirin', rarity: 'Common', stock: 0 },
    { id: MAT_IDS.KirHide,     name: 'Kirin Hide',     category: 'Kirin', rarity: 'Common', stock: 0 },
    { id: MAT_IDS.KirMane,     name: 'Kirin Mane',     category: 'Kirin', rarity: 'Common', stock: 0 },
    { id: MAT_IDS.KirAzureHorn,     name: 'Kirin Azure Horn',     category: 'Kirin', rarity: 'Rare', stock: 0 },

    // Uncommon (Otros)
    { id: MAT_IDS.AncientBone,     name: 'Ancient Bone',     category: 'Bone', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.Kestshell,     name: 'Kestodon Shell',     category: 'Bone', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.BullHead,     name: 'Bullfango Head',     category: 'Bone', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.LargeBarrel,     name: 'Large Barrel',     category: 'Tech', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.Gunpowder,     name: 'Gunpowder',     category: 'Tech', rarity: 'Uncommon', stock: 0 },
    { id: MAT_IDS.IronOre,     name: 'Iron Ore',     category: 'Tech', rarity: 'Uncommon', stock: 0 },

    // Rare (Bosses)
    { id: MAT_IDS.ElderDragGem, name: 'Large Elder Dragon Gem', category: 'Special', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.WyvernGem, name: 'Wyvern Gem', category: 'Special', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.WarpedBone, name: 'Warped Bone', category: 'Special', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.SinisterCloth, name: 'Sinister Cloth', category: 'Special', rarity: 'Rare', stock: 0 },
    { id: MAT_IDS.DevilsBlight, name: 'Devil\'s Blight', category: 'Special', rarity: 'Rare', stock: 0 },

    //Legendary
    { id: MAT_IDS.PalicoVoucher, name: 'Palico Voucher', category: 'Special', rarity: 'Legendary', stock: 0 },
    { id: MAT_IDS.PoogieVoucher, name: 'Poogie Voucher', category: 'Special', rarity: 'Legendary', stock: 0 },
    { id: MAT_IDS.PrismaticPigment, name: 'Prismatic Pigment', category: 'Special', rarity: 'Legendary', stock: 0 }
];