using SpaceShooter.ViewMode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace SpaceShooter
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new WindowViewModel();
        }

        private void AppWindow_Deactivated(object sender, EventArgs e)
        {
            KeyHook.Current.Unsubscribe(); //jak okno jest nie aktywne to nie podglądaj klawiatury
        }

        private void AppWindow_Activated(object sender, EventArgs e)
        {
            KeyHook.Current.Subscribe(); //jak okno się aktywije podglądaj klawiature
        }
    }
}
