using SpaceShooter.ViewMode.Base;
using System.Windows;

namespace SpaceShooter.ViewMode
{
    public class WindowViewModel : ViewModelBase
    {
        #region Fields

        private Window _window;

        #endregion

        #region Properties

        public double WindowMinimumHeight => 500;

        public double WindowMinimumWidth => 800;

        public int WindowRadius => 10;

        #endregion
    }
}
