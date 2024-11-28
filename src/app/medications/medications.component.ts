import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-medications',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent {
}
