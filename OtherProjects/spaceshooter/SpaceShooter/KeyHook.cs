using Gma.System.MouseKeyHook;
using System;
using System.Windows.Forms;

namespace SpaceShooter
{
    public class KeyHook
    {
        #region Prawidłowa implementacja Singletona!!
        public static KeyHook Current => _implementation.Value;
        private static Lazy<KeyHook> _implementation = new Lazy<KeyHook>(Create, System.Threading.LazyThreadSafetyMode.PublicationOnly);


        private static KeyHook Create()
        {
            return new KeyHook();
        }

        private KeyHook() { }
        #endregion

        private IKeyboardMouseEvents m_GlobalHook;

        public event EventHandler<KeyPressedEventArg> OnKeyPressed;

        public void Subscribe()
        {
            m_GlobalHook = Hook.GlobalEvents();
            m_GlobalHook.KeyPress += GlobalHookKeyPress;
        }

        public void Unsubscribe()
        {
            m_GlobalHook.KeyPress -= GlobalHookKeyPress;

            //It is recommened to dispose it
            m_GlobalHook.Dispose();
        }

        private void GlobalHookKeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == 'd')
                OnKeyPressed?.Invoke(this, new KeyPressedEventArg(KeyType.Right));
            if (e.KeyChar == 'a')
                OnKeyPressed?.Invoke(this, new KeyPressedEventArg(KeyType.Left));
        }
    }

    public class KeyPressedEventArg : EventArgs
    {
        public KeyPressedEventArg(KeyType keyType)
        {
            KeyType = keyType;
        }

        public KeyType KeyType { get; }
    }

    public enum KeyType
    {
        Space,
        Left,
        Right,
    }
}
