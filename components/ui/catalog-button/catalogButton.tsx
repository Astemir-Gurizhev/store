
import cn from './catalogButton.module.scss';

export const CatalogButton = () => {
  return (
    <button 
      type="button" 
      className={cn.catalogButton}
      aria-label="Открыть каталог"
    >
      Каталог
      <img className={cn.arrow} src="/header/arrow.png" alt="" />
    </button>
  );
};