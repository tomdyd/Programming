using System.Windows;

namespace SpaceShooter
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        private KeyHook _keyHook;

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            var window = new MainWindow();
            window.Show();
        }

        protected override void OnExit(ExitEventArgs e)
        {
            KeyHook.Current.Unsubscribe();
            base.OnExit(e);
        }
    }
}
