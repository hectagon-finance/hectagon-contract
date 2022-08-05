export const CONTRACTS: Record<string, string> = {
    hecta: "HectagonERC20Token",
    gHecta: "GovernanceHectagon",
    pHecta: "PHecta",
    tHecta: "THecta",
    distributor: "Distributor",
    treasury: "HectagonTreasury",
    bondDepo: "HectagonBondDepository",
    authority: "HectagonAuthority",
    circulatingSupply: "HectaCirculatingSupply",
    snapshot: "Snapshot",
    quickBond: "HectagonQuickBond",
};

export const ADDRESSES: Record<string, string> = {
    busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // mainnet
    treasury: "",
};

export const LARGE_APPROVAL = "100000000000000000000000000000000";

export const EPOCH_LENGTH_IN_SECONDS = "28800"; // 8 hours
export const FIRST_EPOCH_NUMBER = "0";
export const FIRST_EPOCH_TIME = "";

// init system
export const INITIAL_REWARD_RATE = "5000"; // 0.5 %
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
