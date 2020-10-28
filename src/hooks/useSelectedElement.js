import { useMemo } from 'react';
import { useStoreState } from 'react-flow-renderer';

export default function useSelectedElement() {
  const { elements, selectedElements } = useStoreState((store) => ({
    elements: store.elements,
    selectedElements: store.selectedElements || [],
  }));

  return useMemo(() => {
    if (!selectedElements.length) return undefined;
    return elements.find((el) => el.id === selectedElements[0].id);
  }, [elements, selectedElements]);
}
