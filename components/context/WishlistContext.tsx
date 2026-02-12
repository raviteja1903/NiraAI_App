import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type WishlistItem = {
  id: number;
  title: string;
  image: string;
};

type WishlistContextType = {
  wishlistItems: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isWishlisted: (id: number) => boolean;
  wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const toggleWishlist = (item: WishlistItem) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isWishlisted = (id: number) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlistItems.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
};
