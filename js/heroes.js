// js/heroes.js

window.INITIAL_HEROES = [

    //Courrier: Palico
    {
        id: 'palico',
        name: 'Palico',
        monster: 'Courier',
        theme: 'orange',
        isCourier: true,
        skins: [
            //Palico Rathalos
            {
                id: 'pal_rathalos',
                name: 'Rathalos',
                pieces: [
                    {
                        id: 'pal_rathalos_set',
                        name: 'Rathalos Set',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 15 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 },
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.RathPlate, amount: 3 },
                            { matId: window.MAT_IDS.PalicoVoucher, amount: 1 }
                        ]
                    }
                ]
            },
            //Palico Zinogre
            {
                id: 'pal_zinogre',
                name: 'Zinogre',
                pieces: [
                    {
                        id: 'pal_zinogre_set',
                        name: 'Zinogre Set',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 15 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.ZinSky, amount: 3 },
                            { matId: window.MAT_IDS.PalicoVoucher, amount: 1 }
                        ]
                    }
                ]
            },
            //Palico Kirin
            {
                id: 'pal_kirin',
                name: 'Kirin',
                pieces: [
                    {
                        id: 'pal_kirin_set',
                        name: 'Kirin Set',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 15 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirHide, amount: 3 },
                            { matId: window.MAT_IDS.KirMane, amount: 3 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 3 },
                            { matId: window.MAT_IDS.PalicoVoucher, amount: 1 }
                        ]
                    }
                ]
            },
            //Palico Odogaron
            {
                id: 'pal_odogaron',
                name: 'Odogaron',
                pieces: [
                    {
                        id: 'pal_odogaron_set',
                        name: 'Odogaron Set',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 15 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 3 },
                            { matId: window.MAT_IDS.PalicoVoucher, amount: 1 }
                        ]
                    }
                ]
            },
            //Palico Bone
            {
                id: 'pal_bone',
                name: 'Bone Set',
                pieces: [
                    {
                        id: 'pal_bone_set',
                        name: 'Bone Set',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 15 },
                            { matId: window.MAT_IDS.AncientBone, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 3 },
                            { matId: window.MAT_IDS.PalicoVoucher, amount: 1 }
                        ]
                    }
                ]
            }
        ]
    },

    //Courrier: Poogie!!!
    {
        id: 'poogie',
        name: 'Poogie',
        monster: 'Courier',
        theme: 'pink',
        isCourier: true,
        skins: [
            // Poogie Apprentice Fiver
            {
                id: 'poogie_apprentice_fiver',
                name: 'Apprentice Fiver',
                pieces: [
                    {
                        id: 'poogie_apprentice_fiver_set',
                        name: 'Apprentice Fiver',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 15 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 5 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 4 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 2 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 3 },
                            { matId: window.MAT_IDS.PoogieVoucher, amount: 1 }
                        ]
                    }
                ]
            },

            //Poogie Buzzy Bee
            {
                id: 'poogie_buzzy_bee',
                name: 'Buzzy Bee',
                pieces: [
                    {
                        id: 'poogie_buzzy_bee_set',
                        name: 'Buzzy Bee',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 15 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 5 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 2 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 3 },
                            { matId: window.MAT_IDS.PoogieVoucher, amount: 1 }
                        ]
                    }
                ]
            },

            //Poogie Pumpink's Revenge
            {
                id: 'poogie_pumpkins_revenge',
                name: 'Pumpkin\'s Revenge',
                pieces: [
                    {
                        id: 'poogie_pumpkins_revenge_set',
                        name: 'Pumpkin\'s Revenge',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 15 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 4 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 4 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 5 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 2 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 3 },
                            { matId: window.MAT_IDS.PoogieVoucher, amount: 1 }
                        ]
                    }
                ]
            },

            //Poogie Pretty in Pink
            {
                id: 'poogie_pretty_pink',
                name: 'Pretty in Pink',
                pieces: [
                    {
                        id: 'poogie_pretty_pink_set',
                        name: 'Pretty in Pink',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 15 },
                            { matId: window.MAT_IDS.ZinFur, amount: 4 },
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.BullHead, amount: 5 },
                            { matId: window.MAT_IDS.OdoShard, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 },
                            { matId: window.MAT_IDS.PoogieVoucher, amount: 1 }
                        ]
                    }
                ]
            },

            //Poogie Emperor's New Duds
            {
                id: 'poogie_emperor',
                name: 'Emperor\'s New Duds',
                pieces: [
                    {
                        id: 'poogie_emperor_set',
                        name: 'Emperor\'s New Duds',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 15 },
                            { matId: window.MAT_IDS.KirHide, amount: 4 },
                            { matId: window.MAT_IDS.AncientBone, amount: 4 },
                            { matId: window.MAT_IDS.IronOre, amount: 5 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 },
                            { matId: window.MAT_IDS.RathRuby, amount: 3 },
                            { matId: window.MAT_IDS.PoogieVoucher, amount: 1 }
                        ]
                    }
                ]
            }
        ]
    },

    //Hero: Sniper
    {
        id: 'sniper',
        name: 'Sniper',
        monster: 'Odogaron',
        theme: 'red',
        skins: [
            {
                id: 'sniper_odogaron_set',
                name: 'Odogaron Armor',
                pieces: [
                    {
                        id: 'sniper_odogaron_rifle',
                        name: 'Garon Rifle',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 6 },
                            { matId: window.MAT_IDS.Fur, amount: 6 },   
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 2 }
                        ]
                    },
                    {
                        id: 'sniper_odogaron_helm',
                        name: 'Odogaron Helm',
                        recipe: [
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 2 }
                        ]
                    },
                    {
                        id: 'sniper_odogaron_cape',
                        name: 'Odogaron Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 }
                        ]
                    },
                    {
                        id: 'sniper_odogaron_mail',
                        name: 'Odogaron Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 }
                        ]
                    },
                    {
                        id: 'sniper_odogaron_vambrace',
                        name: 'Odogaron Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'sniper_dreadwood',
                name: 'Sniper Dreadwood',
                pieces: [
                    {
                        id: 'sniper_dreadwood_rifle',
                        name: 'Dreadwood Rifle',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 }
                        ]
                    },
                    {
                        id: 'sniper_dreadwood_helm',
                        name: 'Dreadwood Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 2 }
                        ]
                    },
                    {
                        id: 'sniper_dreadwood_cape',
                        name: 'Dreadwood Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 }
                        ]
                    },
                    {
                        id: 'sniper_dreadwood_mail',
                        name: 'Dreadwood Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 }
                        ]
                    },
                    {
                        id: 'sniper_dreadwood_vambrace',
                        name: 'Dreadwood Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.OdoScale, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'sniper_foxfire',
                name: 'Foxfire',
                pieces: [
                    {
                        id: 'sniper_foxfire_rifle',
                        name: 'Foxfire Rifle',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.ZinFur, amount: 2 },
                            { matId: window.MAT_IDS.OdoShard, amount: 1 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 2 }
                        ]
                    },
                    {
                        id: 'sniper_foxfire_helm',
                        name: 'Foxfire Helm',
                        recipe: [
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 2 },
                            { matId: window.MAT_IDS.OdoShard, amount: 1 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 1 }
                        ]
                    },
                    {
                        id: 'sniper_foxfire_cape',
                        name: 'Foxfire Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 4 }
                        ]
                    },
                    {
                        id: 'sniper_foxfire_mail',
                        name: 'Foxfire Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 2 },
                            { matId: window.MAT_IDS.OdoShard, amount: 1 }
                        ]
                    },
                    {
                        id: 'sniper_foxfire_vambrace',
                        name: 'Foxfire Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.ZinFur, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'sniper_prismatic',
                name: 'Prismatic',
                pieces: [
                    {
                        id: 'sniper_prismatic_rifle',
                        name: 'Prismatic Rifle',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 7 },
                            { matId: window.MAT_IDS.Fur, amount: 7 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 4 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'sniper_prismatic_helm',
                        name: 'Prismatic Helm',
                        recipe: [
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 2 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'sniper_prismatic_cape',
                        name: 'Prismatic Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 6 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 3 }
                        ]
                    },
                    {
                        id: 'sniper_prismatic_mail',
                        name: 'Prismatic Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 },
                            { matId: window.MAT_IDS.ZinSky, amount: 3 }
                        ]
                    },
                    {
                        id: 'sniper_prismatic_vambrace',
                        name: 'Prismatic Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 }
                        ]
                    }
                ]
            }
        ]
    },

    //Hero: Techies
    {
        id: 'techies',
        name: 'Techies',
        monster: 'Base',
        theme: 'yellow',
        skins: [
            {
                id: 'techies_base_set',
                name: 'Techies Base',
                pieces: [
                    {
                        id: 'techies_base_tank',
                        name: 'Base Tank',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 6 },
                            { matId: window.MAT_IDS.Fur, amount: 6 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 4 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 4 },
                            { matId: window.MAT_IDS.IronOre, amount: 4 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 }
                        ]
                    },
                    {
                        id: 'techies_base_sticky',
                        name: 'Base Sticky Bomb',
                        recipe: [
                            { matId: window.MAT_IDS.LargeBarrel, amount: 4 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 4 },
                            { matId: window.MAT_IDS.IronOre, amount: 4 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 1 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_base_sign',
                        name: 'Base Sign',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 4 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_base_spoon',
                        name: 'Base Spoon',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 4 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_base_splee',
                        name: 'Base Splee',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 4 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_base_squee',
                        name: 'Base Squee',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 2 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 4 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_base_cannon',
                        name: 'Base Cannon',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'techies_poison_set',
                name: 'Poison',
                pieces: [
                    {
                        id: 'techies_poison_tank',
                        name: 'Poison Tank',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 1 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_poison_spoon',
                        name: 'Poison Spoon',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 }
                        ]
                    },
                    {
                        id: 'techies_poison_spleen',
                        name: 'Poison Spleen',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_poison_squee',
                        name: 'Poison Squee',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_poison_cannon',
                        name: 'Poison Cannon',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'techies_dire_set',
                name: 'Dire',
                pieces: [
                    {
                        id: 'techies_dire_tank',
                        name: 'Dire Tank',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.KirHide, amount: 2 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 2 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 }
                        ]
                    },
                    {
                        id: 'techies_dire_spoon',
                        name: 'Dire Spoon',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.KirMane, amount: 2 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 2 }
                        ]
                    },
                    {
                        id: 'techies_dire_spleen',
                        name: 'Dire Spleen',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 2 },
                            { matId: window.MAT_IDS.KirMane, amount: 2 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_dire_squee',
                        name: 'Dire Squee',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.KirHide, amount: 2 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_dire_cannon',
                        name: 'Dire Cannon',
                        recipe: [
                            { matId: window.MAT_IDS.KirMane, amount: 2 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'techies_prismatic_set',
                name: 'Prismatic',
                pieces: [
                    {
                        id: 'techies_prismatic_tank',
                        name: 'Prismatic Tank',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.KirHide, amount: 4 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 5 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 5 },
                            { matId: window.MAT_IDS.IronOre, amount: 5 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_prismatic_spoon',
                        name: 'Prismatic Spoon',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 5 },
                            { matId: window.MAT_IDS.IronOre, amount: 5 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 3 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'techies_prismatic_spleen',
                        name: 'Prismatic Spleen',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 4 },
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 5 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 }
                        ]
                    },
                    {
                        id: 'techies_prismatic_squee',
                        name: 'Prismatic Squee',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.KirHide, amount: 4 },
                            { matId: window.MAT_IDS.IronOre, amount: 5 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 }
                        ]
                    },
                    {
                        id: 'techies_prismatic_cannon',
                        name: 'Prismatic Cannon',
                        recipe: [
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 5 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 5 }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 'antimage',
        name: 'Anti Mage',
        monster: 'Kirin',
        theme: 'purple',
        skins: [
            {
                id: 'antimage_kirin_set',
                name: 'Kirin Armor',
                pieces: [
                    {
                        id: 'antimage_kirin_jacket',
                        name: 'Kirin Jacket',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 6 },
                            { matId: window.MAT_IDS.Claw, amount: 6 },
                            { matId: window.MAT_IDS.KirHide, amount: 4 },
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 2 }
                        ]
                    },
                    {
                        id: 'antimage_kirin_blade',
                        name: 'Kirin Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirMane, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 2 }
                        ]
                    },
                    {
                        id: 'antimage_kirin_offblade',
                        name: 'Kirin Off-hand Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirHide, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 2 }
                        ]
                    },
                    {
                        id: 'antimage_kirin_horn',
                        name: 'Kirin Horn',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 2 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 2 }
                        ]
                    },
                    {
                        id: 'antimage_kirin_persona',
                        name: 'Kirin Persona',
                        recipe: [
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 2 },
                            { matId: window.MAT_IDS.KirHide, amount: 2 },
                            { matId: window.MAT_IDS.KirMane, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'antimage_icewrack_set',
                name: 'Icewrack',
                pieces: [
                    {
                        id: 'antimage_icewrack_jacket',
                        name: 'Icewrack Jacket',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.KirHide, amount: 3 },
                            { matId: window.MAT_IDS.KirMane, amount: 3 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 2 }
                        ]
                    },
                    {
                        id: 'antimage_icewrack_blade',
                        name: 'Icewrack Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirMane, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 1 }
                        ]
                    },
                    {
                        id: 'antimage_icewrack_offblade',
                        name: 'Icewrack Off-hand Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirHide, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 1 }
                        ]
                    },
                    {
                        id: 'antimage_icewrack_horn',
                        name: 'Icewrack Horn',
                        recipe: [
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'antimage_golden_set',
                name: 'Golden',
                pieces: [
                    {
                        id: 'antimage_golden_jacket',
                        name: 'Golden Jacket',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 4 },
                            { matId: window.MAT_IDS.KirHide, amount: 3 },
                            { matId: window.MAT_IDS.KirMane, amount: 3 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 2 }
                        ]
                    },
                    {
                        id: 'antimage_golden_blade',
                        name: 'Golden Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 4 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirMane, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 1 }
                        ]
                    },
                    {
                        id: 'antimage_golden_offblade',
                        name: 'Golden Off-hand Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirHide, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 1 }
                        ]
                    },
                    {
                        id: 'antimage_golden_horn',
                        name: 'Golden Horn',
                        recipe: [
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 3 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 1 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 1 }
                        ]
                    }
                ]
            },
            {
                id: 'antimage_prismatic_set',
                name: 'Prismatic',
                pieces: [
                    {
                        id: 'antimage_prismatic_jacket',
                        name: 'Prismatic Jacket',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 10 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 6 },
                            { matId: window.MAT_IDS.KirHide, amount: 4 },
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.RathRuby, amount: 2 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 4 }
                        ]
                    },
                    {
                        id: 'antimage_prismatic_blade',
                        name: 'Prismatic Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.RathTail, amount: 6 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 4 },
                            { matId: window.MAT_IDS.KirMane, amount: 4 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 2 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'antimage_prismatic_offblade',
                        name: 'Prismatic Off-hand Blade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.RathWing, amount: 6 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 4 },
                            { matId: window.MAT_IDS.KirHide, amount: 4 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 2 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'antimage_prismatic_horn',
                        name: 'Prismatic Horn',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.KirThunderhorn, amount: 4 },
                            { matId: window.MAT_IDS.RathPlate, amount: 2 },
                            { matId: window.MAT_IDS.KirAzureHorn, amount: 2 },
                            { matId: window.MAT_IDS.ElderDragGem, amount: 2 }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 'dk',
        name: 'Dragon Knight',
        monster: 'Rathalos',
        theme: 'orange',
        skins: [
            {
                id: 'dk_rathalos_set',
                name: 'Rathalos Armor',
                pieces: [
                    {
                        id: 'dk_rathalos_sword',
                        name: 'Rathalos Sword',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 6 },
                            { matId: window.MAT_IDS.Claw, amount: 6 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 4 },
                            { matId: window.MAT_IDS.RathRuby, amount: 2 },
                            { matId: window.MAT_IDS.RathPlate, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_rathalos_shield',
                        name: 'Rathalos Shield',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 6 },
                            { matId: window.MAT_IDS.Claw, amount: 6 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 4 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 4 }
                        ]
                    },
                    {
                        id: 'dk_rathalos_mail',
                        name: 'Rathalos Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 },
                            { matId: window.MAT_IDS.RathPlate, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_rathalos_helm',
                        name: 'Rathalos Helm',
                        recipe: [
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.RathRuby, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_rathalos_coil',
                        name: 'Rathalos Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 4 }
                        ]
                    },
                    {
                        id: 'dk_rathalos_braces',
                        name: 'Rathalos Braces',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'dk_imperium_set',
                name: 'Imperium',
                pieces: [
                    {
                        id: 'dk_imperium_sword',
                        name: 'Imperium Sword',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.RathPlate, amount: 1 }
                        ]
                    },
                    {
                        id: 'dk_imperium_shield',
                        name: 'Imperium Shield',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 },
                            { matId: window.MAT_IDS.RathRuby, amount: 1 }
                        ]
                    },
                    {
                        id: 'dk_imperium_mail',
                        name: 'Imperium Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 },
                            { matId: window.MAT_IDS.RathPlate, amount: 1 }
                        ]
                    },
                    {
                        id: 'dk_imperium_helm',
                        name: 'Imperium Helm',
                        recipe: [
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.RathRuby, amount: 1 }
                        ]
                    },
                    {
                        id: 'dk_imperium_coil',
                        name: 'Imperium Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.RathWing, amount: 3 }
                        ]
                    },
                    {
                        id: 'dk_imperium_braces',
                        name: 'Imperium Braces',
                        recipe: [
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'dk_deep_vault_set',
                name: 'Deep Vault',
                pieces: [
                    {
                        id: 'dk_deep_vault_sword',
                        name: 'Deep Vault Sword',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 2 },
                            { matId: window.MAT_IDS.RathRuby, amount: 2 },
                            { matId: window.MAT_IDS.RathPlate, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_deep_vault_shield',
                        name: 'Deep Vault Shield',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 },
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_deep_vault_mail',
                        name: 'Deep Vault Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 2 },
                            { matId: window.MAT_IDS.RathPlate, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_deep_vault_helm',
                        name: 'Deep Vault Helm',
                        recipe: [
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.RathTail, amount: 3 },
                            { matId: window.MAT_IDS.AncientBone, amount: 2 },
                            { matId: window.MAT_IDS.RathRuby, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_deep_vault_coil',
                        name: 'Deep Vault Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.RathWing, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_deep_vault_braces',
                        name: 'Deep Vault Braces',
                        recipe: [
                            { matId: window.MAT_IDS.RathCarapache, amount: 5 },
                            { matId: window.MAT_IDS.AncientBone, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'dk_prismatic_set',
                name: 'Prismatic',
                pieces: [
                    {
                        id: 'dk_prismatic_sword',
                        name: 'Prismatic Sword',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 4 },
                            { matId: window.MAT_IDS.BullHead, amount: 4 },
                            { matId: window.MAT_IDS.RathRuby, amount: 2 },
                            { matId: window.MAT_IDS.RathPlate, amount: 4 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'dk_prismatic_shield',
                        name: 'Prismatic Shield',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 4 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 4 },
                            { matId: window.MAT_IDS.Kestshell, amount: 4 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'dk_prismatic_mail',
                        name: 'Prismatic Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.RathCarapache, amount: 4 },
                            { matId: window.MAT_IDS.Kestshell, amount: 4 },
                            { matId: window.MAT_IDS.RathPlate, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_prismatic_helm',
                        name: 'Prismatic Helm',
                        recipe: [
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.RathTail, amount: 4 },
                            { matId: window.MAT_IDS.AncientBone, amount: 4 },
                            { matId: window.MAT_IDS.RathRuby, amount: 4 }
                        ]
                    },
                    {
                        id: 'dk_prismatic_coil',
                        name: 'Prismatic Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.RathWing, amount: 4 },
                            { matId: window.MAT_IDS.BullHead, amount: 4 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 2 }
                        ]
                    },
                    {
                        id: 'dk_prismatic_braces',
                        name: 'Prismatic Braces',
                        recipe: [
                            { matId: window.MAT_IDS.RathCarapache, amount: 6 },
                            { matId: window.MAT_IDS.AncientBone, amount: 4 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 2 }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 'beastmaster',
        name: 'Beastmaster',
        monster: 'Bone',
        theme: 'stone',
        skins: [
            {
                id: 'beastmaster_bone_set',
                name: 'Bone Armor',
                pieces: [
                    {
                        id: 'beastmaster_bone_chain',
                        name: 'Bone Chainblade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 2 }
                        ]
                    },
                    {
                        id: 'beastmaster_bone_helm',
                        name: 'Bone Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 6 },
                            { matId: window.MAT_IDS.AncientBone, amount: 4 },
                            { matId: window.MAT_IDS.Kestshell, amount: 4 },
                            { matId: window.MAT_IDS.BullHead, amount: 5 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 2 }
                        ]
                    },
                    {
                        id: 'beastmaster_bone_mail',
                        name: 'Bone Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.AncientBone, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 5 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 2 }
                        ]
                    },
                    {
                        id: 'beastmaster_bone_coil',
                        name: 'Bone Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.AncientBone, amount: 5 },
                            { matId: window.MAT_IDS.Kestshell, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 }
                        ]
                    },
                    {
                        id: 'beastmaster_bone_vambrace',
                        name: 'Bone Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'beastmaster_stag_set',
                name: 'White Stag',
                pieces: [
                    {
                        id: 'beastmaster_stag_chain',
                        name: 'White Stag Chainblade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 1 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 1 }
                        ]
                    },
                    {
                        id: 'beastmaster_stag_helm',
                        name: 'White Stag Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 }
                        ]
                    },
                    {
                        id: 'beastmaster_stag_mail',
                        name: 'White Stag Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.AncientBone, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 3 }
                        ]
                    },
                    {
                        id: 'beastmaster_stag_coil',
                        name: 'White Stag Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 3 },
                            { matId: window.MAT_IDS.AncientBone, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 }
                        ]
                    },
                    {
                        id: 'beastmaster_stag_vambrace',
                        name: 'White Stag Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.WyvernGem, amount: 1 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 1 }
                        ]
                    }
                ]
            },
            {
                id: 'beastmaster_golden_set',
                name: 'Golden',
                pieces: [
                    {
                        id: 'beastmaster_golden_chain',
                        name: 'Golden Chainblade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 3 },
                            { matId: window.MAT_IDS.OdoFang, amount: 3 },
                            { matId: window.MAT_IDS.OdoScale, amount: 3 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 2 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 2 }
                        ]
                    },
                    {
                        id: 'beastmaster_golden_helm',
                        name: 'Golden Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.OdoScale, amount: 2 },
                            { matId: window.MAT_IDS.AncientBone, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 5 }
                        ]
                    },
                    {
                        id: 'beastmaster_golden_mail',
                        name: 'Golden Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 2 },
                            { matId: window.MAT_IDS.AncientBone, amount: 3 },
                            { matId: window.MAT_IDS.Kestshell, amount: 5 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 }
                        ]
                    },
                    {
                        id: 'beastmaster_golden_coil',
                        name: 'Golden Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.OdoFang, amount: 2 },
                            { matId: window.MAT_IDS.AncientBone, amount: 5 },
                            { matId: window.MAT_IDS.Kestshell, amount: 3 },
                            { matId: window.MAT_IDS.BullHead, amount: 3 }
                        ]
                    },
                    {
                        id: 'beastmaster_golden_vambrace',
                        name: 'Golden Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 4 },
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 1 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 1 }
                        ]
                    }
                ]
            },
            {
                id: 'beastmaster_prismatic_set',
                name: 'Prismatic',
                pieces: [
                    {
                        id: 'beastmaster_prismatic_chain',
                        name: 'Prismatic Chainblade',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 3 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 3 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'beastmaster_prismatic_helm',
                        name: 'Prismatic Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.OdoScale, amount: 4 },
                            { matId: window.MAT_IDS.AncientBone, amount: 4 },
                            { matId: window.MAT_IDS.Kestshell, amount: 4 },
                            { matId: window.MAT_IDS.BullHead, amount: 6 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'beastmaster_prismatic_mail',
                        name: 'Prismatic Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.OdoSinew, amount: 4 },
                            { matId: window.MAT_IDS.AncientBone, amount: 4 },
                            { matId: window.MAT_IDS.Kestshell, amount: 6 },
                            { matId: window.MAT_IDS.BullHead, amount: 4 },
                            { matId: window.MAT_IDS.OdoShard, amount: 2 }
                        ]
                    },
                    {
                        id: 'beastmaster_prismatic_coil',
                        name: 'Prismatic Coil',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.OdoFang, amount: 4 },
                            { matId: window.MAT_IDS.AncientBone, amount: 6 },
                            { matId: window.MAT_IDS.Kestshell, amount: 4 },
                            { matId: window.MAT_IDS.BullHead, amount: 4 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 1 }
                        ]
                    },
                    {
                        id: 'beastmaster_prismatic_vambrace',
                        name: 'Prismatic Vambrace',
                        recipe: [
                            { matId: window.MAT_IDS.Essence, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.OdoMantle, amount: 2 },
                            { matId: window.MAT_IDS.WyvernGem, amount: 2 },
                            { matId: window.MAT_IDS.WarpedBone, amount: 1 }
                        ]
                    }
                ]
            }
        ]
    },

    {
        id: 'windranger',
        name: 'Windranger',
        monster: 'Zinogre',
        theme: 'teal',
        skins: [
            {
                id: 'windranger_zinogre_set',
                name: 'Zinogre Armor',
                pieces: [
                    {
                        id: 'windranger_zinogre_helm',
                        name: 'Zinogre Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 6 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 4 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 4 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 2 },
                            { matId: window.MAT_IDS.ZinSky, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_zinogre_mail',
                        name: 'Zinogre Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 6 },
                            { matId: window.MAT_IDS.Claw, amount: 6 },
                            { matId: window.MAT_IDS.ZinFur, amount: 4 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 4 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_zinogre_bow',
                        name: 'Zinogre Bow',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.ZinSky, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_zinogre_cape',
                        name: 'Zinogre Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 }
                        ]
                    },
                    {
                        id: 'windranger_zinogre_quiver',
                        name: 'Zinogre Quiver',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'windranger_autumnal_set',
                name: 'Autumnal',
                pieces: [
                    {
                        id: 'windranger_autumnal_helm',
                        name: 'Autumnal Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 2 },
                            { matId: window.MAT_IDS.ZinSky, amount: 1 }
                        ]
                    },
                    {
                        id: 'windranger_autumnal_mail',
                        name: 'Autumnal Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 }
                        ]
                    },
                    {
                        id: 'windranger_autumnal_bow',
                        name: 'Autumnal Bow',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.ZinSky, amount: 1 }
                        ]
                    },
                    {
                        id: 'windranger_autumnal_cape',
                        name: 'Autumnal Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 3 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 }
                        ]
                    },
                    {
                        id: 'windranger_autumnal_quiver',
                        name: 'Autumnal Quiver',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 }
                        ]
                    }
                ]
            },
            {
                id: 'windranger_sylvan_set',
                name: 'Sylvan',
                pieces: [
                    {
                        id: 'windranger_sylvan_helm',
                        name: 'Sylvan Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 4 },
                            { matId: window.MAT_IDS.IronOre, amount: 2 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 2 },
                            { matId: window.MAT_IDS.ZinSky, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_sylvan_mail',
                        name: 'Sylvan Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.ZinFur, amount: 4 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 2 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_sylvan_bow',
                        name: 'Sylvan Bow',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 2 },
                            { matId: window.MAT_IDS.IronOre, amount: 2 },
                            { matId: window.MAT_IDS.ZinSky, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_sylvan_cape',
                        name: 'Sylvan Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 4 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 4 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_sylvan_quiver',
                        name: 'Sylvan Quiver',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 4 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 2 }
                        ]
                    }
                ]
            },
            {
                id: 'windranger_prismatic_set',
                name: 'Prismatic',
                pieces: [
                    {
                        id: 'windranger_prismatic_helm',
                        name: 'Prismatic Helm',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 3 },
                            { matId: window.MAT_IDS.ZinSky, amount: 3 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'windranger_prismatic_mail',
                        name: 'Prismatic Mail',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.ZinFur, amount: 5 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 3 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.ZinHorn, amount: 3 },
                            { matId: window.MAT_IDS.PrismaticPigment, amount: 1 }
                        ]
                    },
                    {
                        id: 'windranger_prismatic_bow',
                        name: 'Prismatic Bow',
                        recipe: [
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 3 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.IronOre, amount: 3 },
                            { matId: window.MAT_IDS.ZinSky, amount: 3 }
                        ]
                    },
                    {
                        id: 'windranger_prismatic_cape',
                        name: 'Prismatic Cape',
                        recipe: [
                            { matId: window.MAT_IDS.Fur, amount: 5 },
                            { matId: window.MAT_IDS.ZinFur, amount: 3 },
                            { matId: window.MAT_IDS.ZinShocker, amount: 4 },
                            { matId: window.MAT_IDS.Gunpowder, amount: 3 },
                            { matId: window.MAT_IDS.DevilsBlight, amount: 2 }
                        ]
                    },
                    {
                        id: 'windranger_prismatic_quiver',
                        name: 'Prismatic Quiver',
                        recipe: [
                            { matId: window.MAT_IDS.Claw, amount: 5 },
                            { matId: window.MAT_IDS.ZinCortex, amount: 4 },
                            { matId: window.MAT_IDS.LargeBarrel, amount: 3 },
                            { matId: window.MAT_IDS.SinisterCloth, amount: 2 }
                        ]
                    }
                ]
            }
        ]
    }
];
