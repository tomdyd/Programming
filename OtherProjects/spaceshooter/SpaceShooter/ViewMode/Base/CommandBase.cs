using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace SpaceShooter.ViewMode.Base
{
    public class CommandBase : ICommand
    {
        private Action<object?> _action;

        private Predicate<object?> _predicate;

        public CommandBase(Action<object> action)
            : this(action, null)
        {
        }

        public CommandBase(Action<object> action, Predicate<object?> predicate)
        {
            _action = action;
            _predicate = predicate;

        }

        public event EventHandler? CanExecuteChanged;

        public bool CanExecute(object? parameter)
        {
            return _predicate != null ? _predicate(parameter) : true;
        }

        public void Execute(object? parameter)
        {
            _action(parameter);
        }
    }
}
