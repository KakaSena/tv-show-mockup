import { useState, useRef, useEffect } from "react";

export const useFooter = (footerItems, defaultActiveItem) => {
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  const footerBarRef = useRef(null);
  const footerItemsRef = useRef([]);

  const updateFooterBar = (index) => {
    const activeItemElement = footerItemsRef.current[index];
    if (activeItemElement && footerBarRef.current) {
      footerBarRef.current.style.width = `${activeItemElement.offsetWidth}px`;
      footerBarRef.current.style.left = `${activeItemElement.offsetLeft}px`;
    }
  };

  const handleItemClick = (id, index) => {
    setActiveItem(id);
    updateFooterBar(index);
  };

  useEffect(() => {
    const initialIndex = footerItems.findIndex(
      (item) => item.id === activeItem
    );
    updateFooterBar(initialIndex);
  }, [footerItems, activeItem]);

  return {
    activeItem,
    footerBarRef,
    footerItemsRef,
    handleItemClick,
  };
};
