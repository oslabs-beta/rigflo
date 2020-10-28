import { useMemo } from 'react';
import { useStoreState } from 'react-flow-renderer';
import { useElements } from './useElements';

export default function useSelectedElement() {
  const [elements] = useElements();
  const selectedElements = useStoreState(
    (store) => store.selectedElements || [],
  );

  return useMemo(() => {
    if (!selectedElements.length) return undefined;
    return elements.find((el) => el.id === selectedElements[0].id);
  }, [elements, selectedElements]);
}
