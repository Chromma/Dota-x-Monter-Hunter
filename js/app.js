import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

// Importar Datos y Constantes (Nota el .js al final)
import { INITIAL_MATERIALS } from './materials.js';
import { INITIAL_HEROES } from './heroes.js';
import { Icons, RARITY_COLORS } from './constants.js';

// Desestructurar Iconos para uso fácil
const { 
    Sword, Pickaxe, Trophy, Settings, Plus, Trash2, Save, X, 
    Search, Check, CheckCircle2, ArrowRight, Unlock, Filter, 
    ChevronDown, ChevronUp, Hammer, AlertCircle, LayoutGrid, List,
    Edit3, Box, Eye, RefreshCw, AlertTriangle, Download, Upload,
    Cat, Ghost 
} = Icons;

// --- COMPONENTES UI AUXILIARES ---

const RarityBadge = ({ rarity }) => (
    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${RARITY_COLORS[rarity] || RARITY_COLORS.Common}`}>
        {rarity}
    </span>
);

const PieceCard = ({ piece, materials, isCompleted, onCraft }) => {
    const [isOpen, setIsOpen] = useState(false);

    const ingredients = piece.recipe.map(r => {
        const mat = materials.find(m => m.id === r.matId);
        const stock = mat ? mat.stock : 0;
        const hasEnough = stock >= r.amount;
        return { ...r, matName: mat ? mat.name : `Desconocido (${r.matId})`, stock, hasEnough };
    });

    const canCraft = ingredients.every(i => i.hasEnough);

    return (
        <div className={`border rounded-lg overflow-hidden transition-all ${
            isCompleted 
            ? 'bg-emerald-950/20 border-emerald-900/50 opacity-60' 
            : 'bg-slate-950 border-slate-700 hover:border-slate-500'
        }`}>
            <button 
            onClick={() => !isCompleted && setIsOpen(!isOpen)}
            className="w-full p-3 flex items-center justify-between"
            >
            <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${
                    isCompleted 
                        ? 'bg-emerald-500 border-emerald-500 text-white' 
                        : 'border-slate-600 bg-slate-900 text-slate-600'
                }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : <Hammer className="w-3 h-3" />}
                </div>
                <span className={`font-bold text-sm ${isCompleted ? 'text-emerald-500 line-through' : 'text-slate-200'}`}>
                    {piece.name}
                </span>
            </div>
            
            {!isCompleted && (
                <div className="flex items-center gap-2">
                    {canCraft && !isOpen && <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold animate-pulse">LISTO</span>}
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </div>
            )}
            </button>

            {isOpen && !isCompleted && (
            <div className="px-3 pb-3 pt-0 bg-slate-900/50 border-t border-slate-800">
                <div className="space-y-2 mt-3 mb-3">
                    {ingredients.map((ing, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">{ing.matName}</span>
                        <div className="flex items-center gap-2">
                            <span className={ing.hasEnough ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                                {ing.stock} / {ing.amount}
                            </span>
                            <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${ing.hasEnough ? 'bg-emerald-500' : 'bg-red-500'}`} 
                                    style={{ width: `${Math.min(100, (ing.stock / ing.amount) * 100)}%` }}
                                ></div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); onCraft(); }}
                    disabled={!canCraft}
                    className={`w-full py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                        canCraft 
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20' 
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                >
                    {canCraft ? 'CRAFTEAR PIEZA' : 'FALTAN RECURSOS'}
                </button>
            </div>
            )}
        </div>
    );
};

const ConfigSkinDropdown = ({ skin, sIdx, hero, hIdx, heroes, setHeroes, materials, requestConfirmation }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pl-3 border-l-2 border-slate-700 space-y-3">
            <div className="flex items-center gap-2">
                <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex-1 text-left bg-slate-900/50 p-2 rounded border border-slate-800 flex justify-between items-center hover:bg-slate-900"
                >
                <span className="text-emerald-400 text-sm font-bold">Nivel {sIdx + 1}: {skin.name}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
            </div>
            
            {isOpen && (
                <div className="space-y-3 pl-2 pt-2">
                <div>
                    <label className="text-[10px] text-slate-500 uppercase font-bold">Nombre del Set</label>
                    <input 
                        className="bg-transparent border-b border-slate-700 text-white text-sm w-full focus:outline-none py-1"
                        value={skin.name}
                        onChange={(e) => {
                            const newHeroes = [...heroes];
                            newHeroes[hIdx].skins[sIdx].name = e.target.value;
                            setHeroes(newHeroes);
                        }}
                    />
                </div>

                <div className="space-y-2">
                    {skin.pieces.map((piece, pIdx) => (
                        <div key={piece.id} className="bg-slate-900/50 p-2 rounded border border-slate-800 relative group">
                            <button 
                            onClick={() => {
                                requestConfirmation(`¿Eliminar la pieza "${piece.name}"?`, () => {
                                    const newHeroes = [...heroes];
                                    newHeroes[hIdx].skins[sIdx].pieces.splice(pIdx, 1);
                                    setHeroes(newHeroes);
                                });
                            }}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100"
                            ><Trash2 className="w-3 h-3" /></button>

                            <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Nombre Pieza</label>
                            <input 
                            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded px-2 py-1 w-full mb-2"
                            value={piece.name}
                            onChange={(e) => {
                                const newHeroes = [...heroes];
                                newHeroes[hIdx].skins[sIdx].pieces[pIdx].name = e.target.value;
                                setHeroes(newHeroes);
                            }}
                            />

                            <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase font-bold block">Materiales Requeridos</label>
                            {piece.recipe.map((rec, rIdx) => (
                                <div key={rIdx} className="flex gap-2">
                                    <input 
                                        type="number"
                                        className="w-12 bg-slate-950 border border-slate-700 text-center text-white text-xs rounded"
                                        value={rec.amount}
                                        onChange={(e) => {
                                        const newHeroes = [...heroes];
                                        newHeroes[hIdx].skins[sIdx].pieces[pIdx].recipe[rIdx].amount = parseInt(e.target.value) || 0;
                                        setHeroes(newHeroes);
                                        }}
                                    />
                                    <select 
                                        className="flex-1 bg-slate-950 border border-slate-700 text-slate-400 text-xs rounded"
                                        value={rec.matId}
                                        onChange={(e) => {
                                        const newHeroes = [...heroes];
                                        newHeroes[hIdx].skins[sIdx].pieces[pIdx].recipe[rIdx].matId = e.target.value;
                                        setHeroes(newHeroes);
                                        }}
                                    >
                                        {materials.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                    <button onClick={() => {
                                        const newHeroes = [...heroes];
                                        newHeroes[hIdx].skins[sIdx].pieces[pIdx].recipe.splice(rIdx, 1);
                                        setHeroes(newHeroes);
                                    }} className="text-red-500 px-1">x</button>
                                </div>
                            ))}
                            <button 
                                onClick={() => {
                                    const newHeroes = [...heroes];
                                    newHeroes[hIdx].skins[sIdx].pieces[pIdx].recipe.push({ matId: materials[0]?.id || '', amount: 1 });
                                    setHeroes(newHeroes);
                                }}
                                className="text-[10px] text-blue-400 hover:underline mt-1"
                            >
                                + Añadir Material
                            </button>
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={() => {
                            const newHeroes = [...heroes];
                            newHeroes[hIdx].skins[sIdx].pieces.push({ 
                            id: `p_${Date.now()}`, 
                            name: 'Nueva Pieza', 
                            recipe: [] 
                            });
                            setHeroes(newHeroes);
                        }}
                        className="w-full py-1.5 border border-dashed border-slate-600 text-slate-400 text-xs rounded hover:bg-slate-800"
                    >
                        + Añadir Pieza al Set
                    </button>
                </div>
                </div>
            )}
        </div>
    );
};

const ConfigHeroDropdown = ({ hero, hIdx, heroes, setHeroes, materials, requestConfirmation }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border border-slate-700 rounded-lg overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-slate-800 p-3 flex justify-between items-center hover:bg-slate-700 transition-colors"
            >
                <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded bg-${hero.theme}-900 flex items-center justify-center font-bold text-${hero.theme}-400`}>
                    {hero.isCourier && hero.id === 'palico' ? <Cat className="w-5 h-5" /> : 
                    hero.isCourier && hero.id === 'poogie' ? <Ghost className="w-5 h-5" /> : 
                    hero.name[0]}
                </div>
                <span className="font-bold text-white text-lg">{hero.name}</span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            
            {isOpen && (
                <div className="p-3 bg-slate-950 space-y-4">
                {hero.skins.map((skin, sIdx) => (
                    <ConfigSkinDropdown 
                        key={skin.id}
                        skin={skin}
                        sIdx={sIdx}
                        hero={hero}
                        hIdx={hIdx}
                        heroes={heroes}
                        setHeroes={setHeroes}
                        materials={materials}
                        requestConfirmation={requestConfirmation}
                    />
                ))}
                </div>
            )}
        </div>
    );
};

const MaterialCard = ({ mat, updateStock, getGlobalMissing }) => {
    const missing = getGlobalMissing(mat.id);
    const isComplete = missing === 0;

    return (
        <div key={mat.id} className={`rounded-xl p-4 flex items-center justify-between border transition-all shadow-sm ${
        isComplete 
            ? 'bg-slate-900 border-slate-800 opacity-80 hover:opacity-100' 
            : 'bg-slate-900 border-orange-900/40 shadow-orange-900/10'
        }`}>
        <div className="flex flex-col">
            <span className={`font-bold text-sm ${isComplete ? 'text-slate-400' : 'text-slate-100'}`}>{mat.name}</span>
            <div className="flex gap-2 mt-1">
            <RarityBadge rarity={mat.rarity} />
            </div>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-950 rounded-lg border border-slate-800">
            <button onClick={() => updateStock(mat.id, -1)} className="px-3 py-1 text-slate-400 hover:bg-slate-800 rounded-l">-</button>
            <span className="w-10 text-center font-mono text-white font-bold">{mat.stock}</span>
            <button onClick={() => updateStock(mat.id, 1)} className="px-3 py-1 text-blue-400 hover:bg-blue-900/30 rounded-r">+</button>
            </div>

            <div className="w-16 text-right">
                {isComplete ? (
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-500 font-bold tracking-wider">FALTAN</span>
                    <span className="text-emerald-500 font-bold text-sm flex items-center">
                        OK <Check className="w-3 h-3 ml-1" />
                    </span>
                </div>
                ) : (
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-orange-500/70 font-bold tracking-wider">FALTAN</span>
                    <span className="text-orange-500 font-bold text-lg font-mono leading-none">{missing}</span>
                </div>
                )}
            </div>
        </div>
        </div>
    );
};

function App() {
    const [activeTab, setActiveTab] = useState('inventory'); 
    
    // --- ESTADO ---
    const [materials, setMaterials] = useState(() => {
        const saved = localStorage.getItem('cf_mats_v8_pets');
        return saved ? JSON.parse(saved) : INITIAL_MATERIALS;
    });

    const [heroes, setHeroes] = useState(() => {
        const saved = localStorage.getItem('cf_heroes_v8_pets');
        return saved ? JSON.parse(saved) : INITIAL_HEROES;
    });
    
    const [heroProgress, setHeroProgress] = useState(() => {
        const saved = localStorage.getItem('cf_prog_v8');
        return saved ? JSON.parse(saved) : {};
    });

    const [completedPieces, setCompletedPieces] = useState(() => {
        const saved = localStorage.getItem('cf_pieces_v8');
        return saved ? JSON.parse(saved) : {};
    });

    const [heroViewMode, setHeroViewMode] = useState(() => localStorage.getItem('cf_view_v8') || 'grid'); 
    const [invSearch, setInvSearch] = useState('');
    const [invSort, setInvSort] = useState('category'); 
    const fileInputRef = useRef(null);

    const [confirmation, setConfirmation] = useState({ isOpen: false, message: '', onConfirm: null });

    // --- PERSISTENCIA LOCAL ---
    useEffect(() => {
        localStorage.setItem('cf_mats_v8_pets', JSON.stringify(materials));
        localStorage.setItem('cf_heroes_v8_pets', JSON.stringify(heroes));
        localStorage.setItem('cf_prog_v8', JSON.stringify(heroProgress));
        localStorage.setItem('cf_pieces_v8', JSON.stringify(completedPieces));
        localStorage.setItem('cf_view_v8', heroViewMode);
    }, [materials, heroes, heroProgress, completedPieces, heroViewMode]);

    // --- FUNCIONES DE EXPORTAR/IMPORTAR ---
    const exportData = () => {
        const data = {
        materials,
        heroes,
        heroProgress,
        completedPieces,
        timestamp: Date.now()
        };
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `crownfall_backup_${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.materials && data.heroes) {
            requestConfirmation("Esto sobrescribirá tus datos actuales con los del archivo. ¿Continuar?", () => {
                setMaterials(data.materials);
                setHeroes(data.heroes);
                setHeroProgress(data.heroProgress || {});
                setCompletedPieces(data.completedPieces || {});
            });
            }
        } catch (err) {
            alert("Error al leer el archivo. Asegúrate de que es un JSON válido de Crownfall.");
        }
        };
        reader.readAsText(file);
        event.target.value = null;
    };

    // --- CALCULADORAS GLOBALES ---
    const getGlobalMissing = (matId) => {
        let totalNeeded = 0;
        heroes.forEach(hero => {
        const currentLevel = heroProgress[hero.id] || 0;
        for (let i = currentLevel; i < hero.skins.length; i++) {
            const skin = hero.skins[i];
            skin.pieces.forEach(piece => {
            const pieceKey = `${hero.id}_${skin.id}_${piece.id}`;
            if (completedPieces[pieceKey]) return;

            const part = piece.recipe.find(r => r.matId === matId);
            if (part) totalNeeded += part.amount;
            });
        }
        });
        const mat = materials.find(m => m.id === matId);
        const stock = mat ? mat.stock : 0;
        return Math.max(0, totalNeeded - stock);
    };

    const getGlobalTotalDemand = (matId) => {
        let totalNeeded = 0;
        heroes.forEach(hero => {
        hero.skins.forEach(skin => {
            skin.pieces.forEach(piece => {
            const part = piece.recipe.find(r => r.matId === matId);
            if (part) totalNeeded += part.amount;
            });
        });
        });
        return totalNeeded;
    }

    // --- MANEJO DE CONFIRMACION ---
    const requestConfirmation = (message, action) => {
        setConfirmation({ isOpen: true, message, onConfirm: action });
    };

    const handleConfirm = () => {
        if (confirmation.onConfirm) confirmation.onConfirm();
        setConfirmation({ isOpen: false, message: '', onConfirm: null });
    };
    
    const handleCancel = () => {
        setConfirmation({ isOpen: false, message: '', onConfirm: null });
    };

    // --- ACCIONES DE RESET ---
    const resetInventory = () => {
        requestConfirmation(
        "¿Estás seguro de que quieres VACIAR todo el inventario? Esta acción no se puede deshacer.",
        () => setMaterials(prev => prev.map(m => ({ ...m, stock: 0 })))
        );
    };

    const resetHeroesProgress = () => {
        requestConfirmation(
        "¿Reiniciar el nivel de TODOS los héroes al principio?",
        () => {
            setHeroProgress({});
            setCompletedPieces({});
        }
        );
    };
    
    const restoreDefaultData = () => {
        requestConfirmation(
            "¿Restaurar los datos originales extraídos de los CSV? Perderás cambios en recetas personalizadas.",
            () => {
            setMaterials(INITIAL_MATERIALS);
            setHeroes(INITIAL_HEROES);
            }
        );
    }

    const updateStock = (id, delta) => {
        setMaterials(prev => prev.map(m => 
        m.id === id ? { ...m, stock: Math.max(0, m.stock + delta) } : m
        ));
    };

    const craftPiece = (heroId, skinId, piece) => {
        const newMaterials = materials.map(m => {
        const part = piece.recipe.find(r => r.matId === m.id);
        if (part) {
            return { ...m, stock: Math.max(0, m.stock - part.amount) };
        }
        return m;
        });
        setMaterials(newMaterials);

        const pieceKey = `${heroId}_${skinId}_${piece.id}`;
        const newCompleted = { ...completedPieces, [pieceKey]: true };
        setCompletedPieces(newCompleted);

        const hero = heroes.find(h => h.id === heroId);
        const currentSkin = hero.skins.find(s => s.id === skinId);
        
        const allDone = currentSkin.pieces.every(p => {
        const k = `${heroId}_${skinId}_${p.id}`;
        return newCompleted[k]; 
        });

        if (allDone) {
        setTimeout(() => {
            setHeroProgress(prev => ({
                ...prev,
                [heroId]: (prev[heroId] || 0) + 1
            }));
        }, 500);
        }
    };

    // --- RENDERIZADO: INVENTARIO ---
    const renderInventory = () => {
        let filtered = materials.filter(m => 
        m.name.toLowerCase().includes(invSearch.toLowerCase()) || 
        m.category.toLowerCase().includes(invSearch.toLowerCase())
        );

        if (invSort === 'alpha') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        let content;
        if (invSort === 'category' || invSort === 'rarity') {
        const grouped = filtered.reduce((acc, mat) => {
            const key = invSort === 'category' ? mat.category : mat.rarity;
            if (!acc[key]) acc[key] = [];
            acc[key].push(mat);
            return acc;
        }, {});
        
        const keys = Object.keys(grouped).sort();
        content = keys.map(group => (
            <div key={group} className="mb-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                {group}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {grouped[group].map(mat => (
                    <MaterialCard 
                        key={mat.id} 
                        mat={mat} 
                        updateStock={updateStock} 
                        getGlobalMissing={getGlobalMissing} 
                    />
                ))}
            </div>
            </div>
        ));
        } else {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map(mat => (
                <MaterialCard 
                    key={mat.id} 
                    mat={mat} 
                    updateStock={updateStock} 
                    getGlobalMissing={getGlobalMissing} 
                />
                ))}
            </div>
        );
        }

        return (
        <div className="pb-20 relative">
            <div className="sticky top-[4rem] -mt-4 pt-4 pb-4 bg-slate-950/95 backdrop-blur z-30 border-b border-slate-800 mb-4 shadow-xl">
            <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                <input 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-8 py-2 text-sm text-white focus:border-blue-500 outline-none"
                    placeholder="Buscar recurso..."
                    value={invSearch}
                    onChange={e => setInvSearch(e.target.value)}
                />
                {invSearch && (
                    <button 
                        onClick={() => setInvSearch('')} 
                        className="absolute right-3 top-2.5 text-slate-500 hover:text-white"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
                </div>
                <div className="flex items-center space-x-2">
                <button 
                    onClick={resetInventory}
                    className="px-3 py-2 rounded bg-red-900/20 text-red-400 border border-red-900/50 hover:bg-red-900/40 flex items-center transition-colors"
                    title="Poner todo el stock a 0"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
                
                <div className="h-6 w-px bg-slate-700 mx-2"></div>

                <Filter className="w-4 h-4 text-slate-500" />
                {[
                    { id: 'category', label: 'Categoría' },
                    { id: 'rarity', label: 'Rareza' },
                    { id: 'alpha', label: 'A-Z' },
                ].map(opt => (
                    <button
                        key={opt.id}
                        onClick={() => setInvSort(opt.id)}
                        className={`px-3 py-1.5 rounded text-xs font-bold uppercase whitespace-nowrap transition-colors ${
                        invSort === opt.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        {opt.label}
                    </button>
                ))}
                </div>
            </div>
            </div>
            
            {content}
        </div>
        );
    };

    // --- RENDERIZADO: HEROES ---
    const renderHeroes = () => {
        return (
        <div className="relative">
            <div className="sticky top-[4rem] -mt-4 pt-4 pb-4 bg-slate-950/95 backdrop-blur z-30 border-b border-slate-800 mb-4 flex justify-end">
                <button 
                onClick={resetHeroesProgress}
                className="flex items-center px-4 py-2 bg-red-900/20 text-red-400 border border-red-900/50 rounded-lg text-xs font-bold hover:bg-red-900/40 transition-colors"
                >
                <RefreshCw className="w-3.5 h-3.5 mr-2" />
                REINICIAR PROGRESO
                </button>
            </div>

            <div className={`pb-20 ${heroViewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-4' : 'space-y-4'}`}>
            {heroes.map(hero => {
                const currentIndex = heroProgress[hero.id] || 0;
                const isMaxed = currentIndex >= hero.skins.length;
                const currentSkin = isMaxed ? hero.skins[hero.skins.length - 1] : hero.skins[currentIndex];
                
                return (
                <div key={hero.id} className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative ${isMaxed ? 'opacity-75' : ''}`}>
                    
                    <div className={`p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800 flex justify-between items-center relative z-10`}>
                        <div className="text-right">
                        <h3 className="font-black text-white text-xl uppercase italic tracking-wide flex items-center gap-2 justify-end">
                            {hero.name} 
                            {hero.id === 'palico' && <Cat className="w-5 h-5 text-orange-400"/>}
                            {hero.id === 'poogie' && <Ghost className="w-5 h-5 text-pink-400"/>}
                        </h3>
                        <div className={`text-sm text-${hero.theme}-400 font-bold flex items-center justify-end gap-2`}>
                            {isMaxed ? 'COLECCIÓN COMPLETA' : currentSkin.name}
                            {!isMaxed && <div className={`w-2 h-2 rounded-full bg-${hero.theme}-500 animate-pulse`}></div>}
                        </div>
                        </div>

                        <div className="flex flex-col items-start min-w-[80px]">
                        <div className="text-xs font-mono text-slate-500 mb-1 font-bold">
                            {hero.isCourier ? 'ESTILO' : 'NIVEL'} {isMaxed ? 'MAX' : `${currentIndex + 1}/${hero.skins.length}`}
                        </div>
                        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full bg-${hero.theme}-500`} style={{ width: `${((currentIndex) / hero.skins.length) * 100}%` }}></div>
                        </div>
                        </div>
                    </div>

                    <div className="p-4 relative z-10 space-y-3">
                        {isMaxed ? (
                        <div className="text-center py-8 text-emerald-500 flex flex-col items-center">
                            <Trophy className="w-16 h-16 mb-2 opacity-50" />
                            <span className="font-bold text-lg">¡MAESTRO CAZADOR!</span>
                            <span className="text-sm text-slate-500">Has completado todos los sets.</span>
                        </div>
                        ) : (
                        <div className={heroViewMode === 'grid' ? 'space-y-3' : 'grid grid-cols-1 md:grid-cols-2 gap-3'}>
                            {currentSkin.pieces.map(piece => (
                            <PieceCard 
                                key={piece.id}
                                piece={piece}
                                materials={materials}
                                isCompleted={completedPieces[`${hero.id}_${currentSkin.id}_${piece.id}`]}
                                onCraft={() => craftPiece(hero.id, currentSkin.id, piece)}
                            />
                            ))}
                        </div>
                        )}
                    </div>

                    <div className={`absolute bottom-0 right-0 w-48 h-48 bg-${hero.theme}-500/10 rounded-full blur-3xl -z-0 pointer-events-none translate-x-10 translate-y-10`}></div>
                </div>
                );
            })}
            </div>
        </div>
        );
    };

    // --- RENDERIZADO: CONFIG ---
    const renderConfig = () => {
        return (
        <div className="grid grid-cols-1 gap-8 pb-20 max-w-4xl mx-auto">
            
            {/* CONFIG GENERAL */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
                <div>
                <h3 className="font-bold text-white text-sm">Vista de Héroes</h3>
                <p className="text-xs text-slate-400">Elige cómo visualizar tus tarjetas de progreso.</p>
                </div>
                <div className="flex bg-slate-950 p-1 rounded border border-slate-800">
                <button onClick={() => setHeroViewMode('grid')} className={`p-2 rounded ${heroViewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}><LayoutGrid className="w-4 h-4"/></button>
                <button onClick={() => setHeroViewMode('list')} className={`p-2 rounded ${heroViewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}><List className="w-4 h-4"/></button>
                </div>
            </div>

            {/* EXPORTAR/IMPORTAR */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white text-sm mb-4">Copia de Seguridad (Cloud Simulado)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded border border-slate-800 flex flex-col items-center text-center">
                    <Download className="w-8 h-8 text-blue-500 mb-2" />
                    <h4 className="font-bold text-slate-200 text-sm">Guardar Progreso</h4>
                    <p className="text-xs text-slate-500 mb-3">Descarga un archivo con todo tu avance actual.</p>
                    <button onClick={exportData} className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold">DESCARGAR JSON</button>
                </div>

                <div className="bg-slate-950 p-4 rounded border border-slate-800 flex flex-col items-center text-center">
                    <Upload className="w-8 h-8 text-emerald-500 mb-2" />
                    <h4 className="font-bold text-slate-200 text-sm">Cargar Progreso</h4>
                    <p className="text-xs text-slate-500 mb-3">Sube el archivo JSON para restaurar tus datos.</p>
                    <input 
                        type="file" 
                        accept=".json" 
                        ref={fileInputRef}
                        onChange={importData}
                        className="hidden"
                    />
                    <button onClick={() => fileInputRef.current?.click()} className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold">SUBIR JSON</button>
                </div>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
                <div>
                <h3 className="font-bold text-white text-sm">Restaurar Datos de Fábrica</h3>
                <p className="text-xs text-slate-400">Recuperar la configuración original extraída de los archivos CSV.</p>
                </div>
                <button 
                onClick={restoreDefaultData}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold py-2 px-4 rounded border border-slate-700"
                >
                Restaurar Originales
                </button>
            </div>

            {/* SECCION 1: MATERIALES */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                <h2 className="text-lg font-bold text-white flex items-center">
                    <Pickaxe className="w-5 h-5 mr-2 text-blue-400" /> 
                    Gestión de Materiales
                </h2>
                <button 
                    onClick={() => setMaterials([...materials, { id: `new_${Date.now()}`, name: 'Nuevo Material', category: 'General', rarity: 'Common', stock: 0 }])}
                    className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded font-bold flex items-center"
                >
                    <Plus className="w-3 h-3 mr-1" /> Añadir
                </button>
            </div>
            
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto">
                {materials.map((mat, idx) => {
                const totalRequired = getGlobalTotalDemand(mat.id);
                return (
                    <div key={mat.id} className="p-3 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors group relative">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => requestConfirmation("¿Eliminar material?", () => setMaterials(materials.filter(m => m.id !== mat.id)))} className="text-red-500 hover:text-red-400"><Trash2 className="w-4 h-4"/></button>
                        </div>
                        
                        <div className="space-y-3">
                            <div>
                            <label className="text-[10px] text-slate-500 uppercase font-bold">Nombre</label>
                            <input 
                                className="bg-slate-900 border-b border-slate-700 text-white text-sm font-bold w-full focus:outline-none focus:border-blue-500 py-1"
                                value={mat.name}
                                onChange={(e) => { const newMats = [...materials]; newMats[idx].name = e.target.value; setMaterials(newMats); }}
                            />
                            </div>
                            <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="text-[10px] text-slate-500 uppercase font-bold">Categoría</label>
                                <input 
                                    className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded px-2 py-1.5 w-full"
                                    value={mat.category}
                                    onChange={(e) => { const newMats = [...materials]; newMats[idx].category = e.target.value; setMaterials(newMats); }}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-[10px] text-slate-500 uppercase font-bold">Rareza</label>
                                <select 
                                    className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded px-2 py-1.5 w-full"
                                    value={mat.rarity}
                                    onChange={(e) => { const newMats = [...materials]; newMats[idx].rarity = e.target.value; setMaterials(newMats); }}
                                >
                                    {Object.keys(RARITY_COLORS).map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>
                            </div>
                            <div className="flex items-center gap-3 pt-2 border-t border-slate-800 mt-2">
                            <div className="flex-1">
                                <label className="text-[10px] text-slate-500 uppercase font-bold">Tu Stock</label>
                                <input 
                                    type="number"
                                    className="bg-slate-900 border border-slate-700 text-white text-sm rounded px-2 py-1 w-full"
                                    value={mat.stock}
                                    onChange={(e) => { const newMats = [...materials]; newMats[idx].stock = parseInt(e.target.value) || 0; setMaterials(newMats); }}
                                />
                            </div>
                            <div className="flex-1 opacity-50">
                                <label className="text-[10px] text-slate-500 uppercase font-bold flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3"/> Demanda Global
                                </label>
                                <div className="text-sm font-mono text-slate-300 py-1">{totalRequired}</div>
                            </div>
                            </div>
                        </div>
                    </div>
                );
                })}
            </div>
            </div>

            {/* SECCION 2: HEROES Y SETS (DROPDOWNS) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 bg-slate-950 border-b border-slate-800">
                <h2 className="text-lg font-bold text-white flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-400" /> 
                    Editor de Sets y Piezas
                </h2>
            </div>

            <div className="p-4 space-y-6">
                {heroes.map((hero, hIdx) => (
                <ConfigHeroDropdown 
                    key={hero.id} 
                    hero={hero} 
                    hIdx={hIdx} 
                    heroes={heroes} 
                    setHeroes={setHeroes} 
                    materials={materials} 
                    requestConfirmation={requestConfirmation}
                />
                ))}
            </div>
            </div>
        </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
        
        {/* HEADER APP */}
        <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-xl h-16 flex items-center justify-between px-4">
            <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-2 rounded-lg shadow-lg shadow-orange-900/20">
                <Sword className="w-5 h-5 text-white" />
                </div>
                <div>
                <h1 className="text-lg font-bold text-white leading-tight tracking-tight hidden md:block">Dota x Monster Hunter</h1>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold hidden md:block">Tracker Global</p>
                </div>
            </div>
            
            <nav className="flex space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                {[
                { id: 'inventory', icon: Pickaxe, label: 'Inventario' },
                { id: 'heroes', icon: Trophy, label: 'Héroes' },
                { id: 'config', icon: Settings, label: 'Config' }
                ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide flex items-center transition-all ${
                    activeTab === tab.id 
                        ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                >
                    <tab.icon className="w-3.5 h-3.5 md:mr-2" />
                    <span className="hidden md:inline">{tab.label}</span>
                </button>
                ))}
            </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 pt-4">
            {activeTab === 'inventory' && renderInventory()}
            {activeTab === 'heroes' && renderHeroes()}
            {activeTab === 'config' && renderConfig()}
        </main>

        {/* MODAL DE CONFIRMACIÓN */}
        {confirmation.isOpen && (
            <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
                <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">¿Estás seguro?</h3>
                <p className="text-slate-400 text-sm mb-6">{confirmation.message}</p>
                
                <div className="flex gap-3 w-full">
                    <button 
                    onClick={handleCancel}
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                    >
                    Cancelar
                    </button>
                    <button 
                    onClick={handleConfirm}
                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold shadow-lg shadow-red-900/20 transition-colors"
                    >
                    Confirmar
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}

        </div>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);