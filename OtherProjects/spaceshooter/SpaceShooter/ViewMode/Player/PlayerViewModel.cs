using SpaceShooter.ViewMode.Base;

namespace SpaceShooter.ViewMode.Player
{
    public class PlayerViewModel : ViewModelBase
    {
        private int _moveScale = 10; // z czasem można zmieniać aby statek się szybciej przesuwał lub zwalniał 
        public PlayerViewModel()
        {
            KeyHook.Current.OnKeyPressed += KeyHook_OnKeyPressed;
        }

        private void KeyHook_OnKeyPressed(object? sender, KeyPressedEventArg e)
        {
            if (e.KeyType == KeyType.Left && (_position - _moveScale) >= 0)
            {
                Position -= _moveScale;
            }
            else if (e.KeyType == KeyType.Right && (_position + _moveScale + 40) <= _maxWith) //40 - szerokość statku
            {
                Position += _moveScale;
            }
        }

        private int _position;
        private string _shipUrl = @"/Images/Ships/player.png";
        private double _maxWith;

        public double MaxWith
        {
            get { return _maxWith; }
            set
            {
                if (_maxWith == value)
                    return;
                _maxWith = value;
                Position = (int)_maxWith / 2;
            }
        }

        public int Position
        {
            get { return _position; }
            set
            {
                if (value == _position)
                    return;
                _position = value;
                OnPropertyChanged(nameof(Position));
            }
        }

        public string ShipUrl
        {
            get { return _shipUrl; }
            set // jak tu w kodzie zmienimy url to odrazu się zmieni na planszy - można wykorzystać do rozbudowy statku 
            {
                if (value == _shipUrl)
                    return;
                ShipUrl = value;
                OnPropertyChanged(ShipUrl);
            }
        }
    }
}
