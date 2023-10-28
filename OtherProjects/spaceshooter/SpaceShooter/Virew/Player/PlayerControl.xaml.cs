using SpaceShooter.ViewMode.Player;
using System.Windows.Controls;


namespace SpaceShooter.Virew.Player
{
    /// <summary>
    /// Interaction logic for PlayerControl.xaml
    /// </summary>
    public partial class PlayerControl : UserControl
    {
        public PlayerControl()
        {
            InitializeComponent();
            mainCanvas.SizeChanged += MainCanvas_SizeChanged;
            DataContext = new PlayerViewModel();
        }

        private void MainCanvas_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            ((PlayerViewModel)DataContext).MaxWith = mainCanvas.ActualWidth;
        }
    }
}
