import styles from './CitySwitcher.module.scss';
import { siteContent } from '../utils/contentConfig';

type City = 'gomel' | 'rechitsa';

interface CitySwitcherProps {
  currentCity: City;
  onCityChange: (city: City) => void;
  compact?: boolean;
}

const cities: { id: City; label: string }[] = [
  { id: 'gomel', label: siteContent.common.cityLabels.gomel },
  { id: 'rechitsa', label: siteContent.common.cityLabels.rechitsa },
];

export default function CitySwitcher({
  currentCity,
  onCityChange,
  compact = false,
}: CitySwitcherProps) {
  return (
    <div
      className={[
        styles.citySwitcher,
        compact ? styles['citySwitcher--compact'] : '',
      ].join(' ')}
    >
      {cities.map((city) => (
        <button
          key={city.id}
          type="button"
          onClick={() => onCityChange(city.id)}
          className={[
            styles.citySwitcher__button,
            currentCity === city.id ? styles['citySwitcher__button--active'] : '',
          ].join(' ')}
        >
          {city.label}
        </button>
      ))}
    </div>
  );
}
